import DNS from 'dns2';
import { checkDomain, refreshBlocklists } from './resolver.js';
import { isCurrentlyBlocked } from './scheduler.js';
import { prisma } from '@media-steward/db';
import type { ScheduleBlock } from '@media-steward/types';

const UPSTREAM_DNS = process.env.UPSTREAM_DNS ?? '1.1.1.1';
const DNS_PORT = parseInt(process.env.DNS_PORT ?? '53', 10);

const client = new DNS({ nameServers: [UPSTREAM_DNS] });

let cachedScheduleBlocks: ScheduleBlock[] | null = null;
let scheduleBlocksLastFetch = 0;
const SCHEDULE_TTL = 30_000;

async function getScheduleBlocks(): Promise<ScheduleBlock[]> {
  if (!cachedScheduleBlocks || Date.now() - scheduleBlocksLastFetch > SCHEDULE_TTL) {
    const blocks = await prisma.scheduleBlock.findMany();
    cachedScheduleBlocks = blocks.map(b => ({ ...b, label: b.label ?? undefined }));
    scheduleBlocksLastFetch = Date.now();
  }
  return cachedScheduleBlocks;
}

const server = DNS.createServer({
  udp: true,
  tcp: true,
  handle: async (request, send) => {
    try {
      const [question] = request.questions;
      const domain = question.name.replace(/\.$/, '');
      const response = DNS.Packet.createResponseFromRequest(request);

      const scheduleBlocks = await getScheduleBlocks();
      // Prisma ScheduleBlock has label: string | null; ScheduleBlock type has label?: string
      // Map null to undefined for type compatibility
      const blocked =
        isCurrentlyBlocked(scheduleBlocks) || (await checkDomain(domain));

      await prisma.dnsQuery.create({ data: { domain, blocked } });

      if (blocked) {
        response.header.rcode = 3; // NXDOMAIN
        send(response);
        return;
      }

      try {
        const upstream = await client.resolve(question.name, 'A');
        response.answers = upstream.answers;
      } catch {
        // Forward failures — return empty answer
      }
      send(response);
    } catch (err) {
      console.error('[dns] handler error:', err);
      // Fall back to forwarding on error
      try {
        const [question] = request.questions;
        const response = DNS.Packet.createResponseFromRequest(request);
        const upstream = await client.resolve(question.name, 'A');
        response.answers = upstream.answers;
        send(response);
      } catch {
        // If upstream also fails, send empty response
        send(DNS.Packet.createResponseFromRequest(request));
      }
    }
  },
});

await refreshBlocklists();
server.listen({ udp: DNS_PORT, tcp: DNS_PORT });
console.log(`[media-steward] DNS server listening on port ${DNS_PORT}`);
setInterval(refreshBlocklists, 6 * 60 * 60 * 1000);

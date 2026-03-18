import DNS from 'dns2';
import { checkDomain, refreshBlocklists } from './resolver.js';
import { isCurrentlyBlocked } from './scheduler.js';
import { prisma } from '@media-steward/db';

const UPSTREAM_DNS = process.env.UPSTREAM_DNS ?? '1.1.1.1';
const DNS_PORT = parseInt(process.env.DNS_PORT ?? '53', 10);

const client = new DNS({ nameServers: [UPSTREAM_DNS] });

const server = DNS.createServer({
  udp: true,
  tcp: true,
  handle: async (request, send) => {
    const [question] = request.questions;
    const domain = question.name.replace(/\.$/, '');
    const response = DNS.Packet.createResponseFromRequest(request);

    const scheduleBlocks = await prisma.scheduleBlock.findMany();
    // Prisma ScheduleBlock has label: string | null; ScheduleBlock type has label?: string
    // Map null to undefined for type compatibility
    const blocked =
      isCurrentlyBlocked(
        scheduleBlocks.map(b => ({ ...b, label: b.label ?? undefined })),
      ) || (await checkDomain(domain));

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
  },
});

await refreshBlocklists();
server.listen({ udp: DNS_PORT, tcp: DNS_PORT });
console.log(`[media-steward] DNS server listening on port ${DNS_PORT}`);
setInterval(refreshBlocklists, 6 * 60 * 60 * 1000);

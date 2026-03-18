declare module 'dns2' {
  import { EventEmitter } from 'events';

  interface DnsQuestion {
    name: string;
    type: number;
    class: number;
  }

  interface DnsAnswer {
    name: string;
    type: number;
    class: number;
    ttl: number;
    address?: string;
    data?: string;
  }

  interface DnsPacket {
    header: {
      id: number;
      qr: number;
      opcode: number;
      aa: number;
      tc: number;
      rd: number;
      ra: number;
      z: number;
      rcode: number;
    };
    questions: DnsQuestion[];
    answers: DnsAnswer[];
    authorities: DnsAnswer[];
    additionals: DnsAnswer[];
  }

  interface DnsRequest extends DnsPacket {}

  type SendFunction = (response: DnsPacket) => void;
  type HandleFunction = (request: DnsRequest, send: SendFunction, client: { address: string; port: number }) => void | Promise<void>;

  interface ServerOptions {
    udp?: boolean | object;
    tcp?: boolean | object;
    doh?: boolean | object;
    handle?: HandleFunction;
  }

  interface ListenOptions {
    udp?: number | { port: number; address?: string };
    tcp?: number | { port: number; address?: string };
    doh?: number | { port: number; address?: string };
  }

  interface DnsClientOptions {
    nameServers?: string[];
    port?: number;
    retries?: number;
    timeout?: number;
    recursive?: boolean;
    resolverProtocol?: string;
  }

  interface ResolveResult {
    answers: DnsAnswer[];
    questions: DnsQuestion[];
    authorities: DnsAnswer[];
    additionals: DnsAnswer[];
  }

  class Packet {
    static createResponseFromRequest(request: DnsRequest): DnsPacket;
  }

  class DNSServer extends EventEmitter {
    listen(options?: ListenOptions): Promise<Record<string, unknown>>;
    close(): Promise<void>;
    addresses(): Record<string, unknown>;
  }

  class DNS extends EventEmitter {
    constructor(options?: DnsClientOptions);
    resolve(domain: string, type?: string, cls?: unknown, clientIp?: string): Promise<ResolveResult>;
    resolveA(domain: string, clientIp?: string): Promise<ResolveResult>;
    resolveAAAA(domain: string): Promise<ResolveResult>;
    resolveMX(domain: string): Promise<ResolveResult>;
    resolveCNAME(domain: string): Promise<ResolveResult>;
    resolvePTR(domain: string): Promise<ResolveResult>;
    static Packet: typeof Packet;
    static createServer(options?: ServerOptions): DNSServer;
    static createUDPServer(options?: object): EventEmitter;
    static createTCPServer(options?: object): EventEmitter;
    static createDOHServer(options?: object): EventEmitter;
  }

  export = DNS;
}

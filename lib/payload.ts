import { getPayload, type Payload } from "payload";
import config from "@/payload.config";

let client: Promise<Payload> | null = null;

export function getPayloadClient(): Promise<Payload> {
  if (!client) {
    client = getPayload({ config });
  }
  return client;
}

type FindArgs = Parameters<Payload["find"]>[0];
type FindResult = Awaited<ReturnType<Payload["find"]>>;

const emptyResult: FindResult = {
  docs: [],
  totalDocs: 0,
  limit: 0,
  totalPages: 0,
  page: 1,
  pagingCounter: 0,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null,
};

/**
 * Wraps payload.find so a temporarily unreachable database degrades pages
 * to an empty state instead of a hard 500 — content here is optional/CMS-driven.
 */
export async function safeFind(args: FindArgs): Promise<FindResult> {
  try {
    const payload = await getPayloadClient();
    return await payload.find(args);
  } catch (error) {
    console.error(`[payload] find("${String(args.collection)}") failed:`, error);
    return { ...emptyResult, limit: args.limit ?? 0 };
  }
}

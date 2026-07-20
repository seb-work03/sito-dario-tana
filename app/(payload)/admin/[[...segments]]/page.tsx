import { RootPage } from "@payloadcms/next/views";
import { generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const configPromise: any = import("@/payload.config").then((m) => m.default);

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({ config: configPromise, params, searchParams });

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config: configPromise, importMap, params, searchParams });

export default Page;

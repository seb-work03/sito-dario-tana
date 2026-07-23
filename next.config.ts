import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dariotana.it" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
  serverExternalPackages: ["drizzle-kit"],
};

export default withPayload(nextConfig);

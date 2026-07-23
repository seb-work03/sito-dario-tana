import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dariotana.it" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
  serverExternalPackages: [
    "drizzle-kit",
    "drizzle-orm",
    "@payloadcms/drizzle",
    "@payloadcms/db-vercel-postgres",
    "@payloadcms/db-postgres",
    "payload",
    "sharp",
  ],
  outputFileTracingIncludes: {
    "/init-db": [
      "./node_modules/drizzle-kit/**/*",
      "./node_modules/drizzle-orm/**/*",
      "./node_modules/@drizzle-team/**/*",
    ],
    "/admin/**": [
      "./node_modules/drizzle-kit/**/*",
      "./node_modules/drizzle-orm/**/*",
      "./node_modules/@drizzle-team/**/*",
    ],
    "/api/**": [
      "./node_modules/drizzle-kit/**/*",
      "./node_modules/drizzle-orm/**/*",
      "./node_modules/@drizzle-team/**/*",
    ],
  },
};

export default withPayload(nextConfig);

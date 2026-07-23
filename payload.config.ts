import { buildConfig } from "payload";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Authors } from "./payload/collections/Authors";
import { Categories } from "./payload/collections/Categories";
import { Posts } from "./payload/collections/Posts";
import { CaseStudies } from "./payload/collections/CaseStudies";
import { Testimonials } from "./payload/collections/Testimonials";
import { Courses } from "./payload/collections/Courses";
import { TeachingExperiences } from "./payload/collections/TeachingExperiences";
import { FAQs } from "./payload/collections/FAQs";
import { Leads } from "./payload/collections/Leads";
import { Redirects } from "./payload/collections/Redirects";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const config = buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  cors: "*",
  csrf: [
    "https://dariotana.it",
    "https://www.dariotana.it",
    "https://sito-dario-tana.vercel.app",
    "https://sito-dario-tana-git-main-seb-work03s-projects.vercel.app",
    "http://localhost:3000",
  ],
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— DarioTana.it",
      description: "Pannello di gestione DarioTana.it",
    },
  },
  collections: [
    Users,
    Media,
    Authors,
    Categories,
    Posts,
    CaseStudies,
    Testimonials,
    Courses,
    TeachingExperiences,
    FAQs,
    Leads,
    Redirects,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "fallback-secret-change-this-now!",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString:
        process.env.STORAGE_POSTGRES_URL_NON_POOLING ||
        process.env.DATABASE_URL_UNPOOLED ||
        process.env.POSTGRES_URL_NON_POOLING ||
        process.env.STORAGE_POSTGRES_URL ||
        process.env.DATABASE_URL,
    },
    push: true,
  }),
  email: process.env.SMTP_HOST
    ? nodemailerAdapter({
        defaultFromAddress: process.env.BREVO_NOTIFICATION_EMAIL || "info@dariotana.it",
        defaultFromName: "DarioTana.it",
        transportOptions: {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        },
      })
    : undefined,
  upload: {
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
    },
  },
  localization: false,
});

export default config;

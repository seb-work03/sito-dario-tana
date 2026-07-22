import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
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
  secret: process.env.PAYLOAD_SECRET || "fallback-secret-change-this",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL?.includes("neon.tech") || process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
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

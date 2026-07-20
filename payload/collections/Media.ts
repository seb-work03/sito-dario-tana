import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Media", plural: "Media" },
  upload: {
    staticDir: "public/media",
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre" },
      { name: "card", width: 800, height: 600, position: "centre" },
      { name: "hero", width: 1920, height: 1080, position: "centre" },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*", "application/pdf"],
  },
  admin: { group: "Contenuti" },
  fields: [
    { name: "alt", type: "text", label: "Alt text", required: true },
    { name: "caption", type: "text", label: "Didascalia" },
    { name: "copyright", type: "text", label: "Copyright" },
    {
      name: "focalPoint",
      type: "point",
      label: "Punto focale",
    },
  ],
};

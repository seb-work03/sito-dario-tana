import type { CollectionConfig } from "payload";

export const Authors: CollectionConfig = {
  slug: "authors",
  labels: { singular: "Autore", plural: "Autori" },
  admin: { group: "Contenuti", useAsTitle: "name" },
  fields: [
    { name: "name", type: "text", label: "Nome", required: true },
    { name: "role", type: "text", label: "Ruolo" },
    { name: "bio", type: "textarea", label: "Biografia" },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Fotografia",
    },
    {
      name: "social",
      type: "group",
      label: "Social",
      fields: [
        { name: "linkedin", type: "text", label: "LinkedIn URL" },
        { name: "twitter", type: "text", label: "Twitter URL" },
        { name: "website", type: "text", label: "Sito web" },
      ],
    },
  ],
};

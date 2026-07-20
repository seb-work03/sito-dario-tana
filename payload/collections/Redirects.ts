import type { CollectionConfig } from "payload";

export const Redirects: CollectionConfig = {
  slug: "redirects",
  labels: { singular: "Redirect", plural: "Redirect" },
  admin: {
    group: "SEO & Tecnico",
    useAsTitle: "from",
    defaultColumns: ["from", "to", "statusCode", "active"],
  },
  fields: [
    { name: "from", type: "text", label: "URL vecchio (es: /blog/articolo-vecchio)", required: true },
    { name: "to", type: "text", label: "URL nuovo (es: /insights/articolo-nuovo)", required: true },
    {
      name: "statusCode",
      type: "select",
      label: "Tipo redirect",
      defaultValue: "301",
      options: [
        { label: "301 - Permanente", value: "301" },
        { label: "302 - Temporaneo", value: "302" },
      ],
    },
    { name: "notes", type: "text", label: "Note" },
    {
      name: "active",
      type: "checkbox",
      label: "Attivo",
      defaultValue: true,
    },
  ],
};

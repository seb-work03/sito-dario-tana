import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: { singular: "Categoria", plural: "Categorie" },
  admin: { group: "Contenuti", useAsTitle: "name" },
  fields: [
    { name: "name", type: "text", label: "Nome", required: true },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
      admin: { description: "URL-friendly, es: strategia-ecommerce" },
    },
    { name: "description", type: "textarea", label: "Descrizione" },
    {
      name: "seo",
      type: "group",
      label: "SEO",
      fields: [
        { name: "title", type: "text", label: "Meta title" },
        { name: "description", type: "textarea", label: "Meta description" },
      ],
    },
  ],
};

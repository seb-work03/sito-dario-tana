import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Articolo", plural: "Articoli" },
  admin: {
    group: "Contenuti",
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedAt", "_status"],
  },
  versions: { drafts: true },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titolo",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      unique: true,
      admin: { description: "URL dell'articolo, es: guida-scegliere-piattaforma-ecommerce" },
    },
    { name: "subtitle", type: "text", label: "Sottotitolo" },
    { name: "excerpt", type: "textarea", label: "Estratto (per anteprime)" },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      label: "Immagine principale",
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      label: "Autore",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      label: "Categoria",
    },
    {
      name: "tags",
      type: "array",
      label: "Tag",
      fields: [{ name: "tag", type: "text" }],
    },
    {
      name: "content",
      type: "richText",
      label: "Contenuto",
      editor: lexicalEditor({}),
    },
    {
      name: "faqs",
      type: "array",
      label: "FAQ",
      fields: [
        { name: "question", type: "text", label: "Domanda" },
        { name: "answer", type: "textarea", label: "Risposta" },
      ],
    },
    {
      name: "cta",
      type: "group",
      label: "CTA contestuale",
      fields: [
        { name: "label", type: "text", label: "Testo CTA" },
        { name: "url", type: "text", label: "URL" },
        {
          name: "type",
          type: "select",
          label: "Collega a",
          options: [
            { label: "Consulenza", value: "consulenza" },
            { label: "Formazione", value: "formazione" },
            { label: "Docenza", value: "docenza" },
            { label: "Corsi & Workshop", value: "corsi" },
            { label: "Contatti", value: "contatti" },
            { label: "Personalizzato", value: "custom" },
          ],
        },
      ],
    },
    {
      name: "relatedPosts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
      label: "Articoli correlati",
    },
    { name: "publishedAt", type: "date", label: "Data di pubblicazione" },
    { name: "updatedLabel", type: "date", label: "Data di aggiornamento" },
    {
      name: "seo",
      type: "group",
      label: "SEO",
      fields: [
        { name: "title", type: "text", label: "Meta title" },
        { name: "description", type: "textarea", label: "Meta description" },
        { name: "keywords", type: "text", label: "Keywords (virgola separata)" },
      ],
    },
  ],
};

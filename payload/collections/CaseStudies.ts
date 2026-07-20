import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  labels: { singular: "Caso studio", plural: "Casi studio" },
  admin: {
    group: "Contenuti",
    useAsTitle: "title",
    defaultColumns: ["title", "sector", "publishedAt", "_status"],
  },
  versions: { drafts: true },
  fields: [
    { name: "title", type: "text", label: "Titolo", required: true },
    { name: "slug", type: "text", label: "Slug", required: true, unique: true },
    { name: "subtitle", type: "text", label: "Sottotitolo" },
    { name: "excerpt", type: "textarea", label: "Estratto" },
    {
      name: "isAnonymous",
      type: "checkbox",
      label: "Anonimo (non mostrare nome azienda)",
      defaultValue: true,
    },
    { name: "companyName", type: "text", label: "Nome azienda (visibile solo se non anonimo)" },
    {
      name: "sector",
      type: "select",
      label: "Settore",
      options: [
        { label: "Moda & Abbigliamento", value: "moda" },
        { label: "Arredamento & Design", value: "arredamento" },
        { label: "Alimentare & Bevande", value: "alimentare" },
        { label: "Elettronica", value: "elettronica" },
        { label: "B2B", value: "b2b" },
        { label: "Farmaceutico & Salute", value: "farmaceutico" },
        { label: "Altro", value: "altro" },
      ],
    },
    {
      name: "type",
      type: "select",
      label: "Tipo di intervento",
      options: [
        { label: "Consulenza", value: "consulenza" },
        { label: "Audit", value: "audit" },
        { label: "Formazione", value: "formazione" },
        { label: "Affiancamento", value: "affiancamento" },
        { label: "Migrazione", value: "migrazione" },
      ],
    },
    {
      name: "challenge",
      type: "textarea",
      label: "Il problema",
    },
    {
      name: "approach",
      type: "textarea",
      label: "L'approccio",
    },
    {
      name: "content",
      type: "richText",
      label: "Contenuto completo",
      editor: lexicalEditor({}),
    },
    {
      name: "results",
      type: "array",
      label: "Risultati",
      fields: [
        { name: "metric", type: "text", label: "Indicatore" },
        { name: "value", type: "text", label: "Valore/Descrizione" },
      ],
    },
    { name: "featuredImage", type: "upload", relationTo: "media", label: "Immagine" },
    { name: "publishedAt", type: "date", label: "Data" },
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

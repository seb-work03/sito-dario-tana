import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: { singular: "Testimonianza", plural: "Testimonianze" },
  admin: {
    group: "Contenuti",
    useAsTitle: "authorName",
    defaultColumns: ["authorName", "company", "type", "rating"],
  },
  fields: [
    { name: "authorName", type: "text", label: "Nome", required: true },
    { name: "role", type: "text", label: "Ruolo" },
    { name: "company", type: "text", label: "Azienda" },
    { name: "text", type: "textarea", label: "Testo testimonianza", required: true },
    {
      name: "rating",
      type: "number",
      label: "Stelle (1-5)",
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: "type",
      type: "select",
      label: "Tipo",
      required: true,
      options: [
        { label: "Consulenza", value: "consulenza" },
        { label: "Formazione aziendale", value: "formazione" },
        { label: "Docenza", value: "docenza" },
        { label: "Corso / Workshop", value: "corso" },
        { label: "Collaborazione", value: "collaborazione" },
        { label: "Evento", value: "evento" },
      ],
    },
    {
      name: "source",
      type: "select",
      label: "Fonte",
      options: [
        { label: "Google My Business", value: "google" },
        { label: "LinkedIn", value: "linkedin" },
        { label: "Email diretta", value: "email" },
        { label: "Altro", value: "altro" },
      ],
    },
    { name: "sourceUrl", type: "text", label: "Link alla recensione originale" },
    { name: "publishedAt", type: "date", label: "Data" },
    {
      name: "featured",
      type: "checkbox",
      label: "Mostra in Home page",
      defaultValue: false,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Foto autore",
    },
  ],
};

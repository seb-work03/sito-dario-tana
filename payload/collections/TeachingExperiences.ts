import type { CollectionConfig } from "payload";

export const TeachingExperiences: CollectionConfig = {
  slug: "teaching-experiences",
  labels: { singular: "Esperienza docenza", plural: "Esperienze docenza" },
  admin: {
    group: "Servizi",
    useAsTitle: "organization",
    defaultColumns: ["organization", "type", "topic", "date", "published"],
  },
  fields: [
    { name: "organization", type: "text", label: "Ente / Organizzazione", required: true },
    {
      name: "type",
      type: "select",
      label: "Tipologia",
      options: [
        { label: "Università", value: "universita" },
        { label: "Business School", value: "business-school" },
        { label: "Master", value: "master" },
        { label: "Ente di formazione", value: "ente-formazione" },
        { label: "Associazione", value: "associazione" },
        { label: "Evento / Conferenza", value: "evento" },
        { label: "Azienda", value: "azienda" },
      ],
    },
    { name: "topic", type: "text", label: "Argomento / Materia" },
    { name: "date", type: "date", label: "Data" },
    { name: "description", type: "textarea", label: "Descrizione" },
    { name: "logo", type: "upload", relationTo: "media", label: "Logo ente" },
    { name: "link", type: "text", label: "Link (opzionale)" },
    {
      name: "published",
      type: "checkbox",
      label: "Visibile sul sito",
      defaultValue: true,
    },
  ],
};

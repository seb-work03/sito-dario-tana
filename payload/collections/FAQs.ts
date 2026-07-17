import type { CollectionConfig } from "payload";

export const FAQs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQ" },
  admin: {
    group: "Contenuti",
    useAsTitle: "question",
    defaultColumns: ["question", "area"],
  },
  fields: [
    { name: "question", type: "text", label: "Domanda", required: true },
    { name: "answer", type: "textarea", label: "Risposta", required: true },
    {
      name: "area",
      type: "select",
      label: "Area",
      options: [
        { label: "Consulenza", value: "consulenza" },
        { label: "Formazione aziendale", value: "formazione" },
        { label: "Docenza", value: "docenza" },
        { label: "Corsi & Workshop", value: "corsi" },
        { label: "Generale", value: "generale" },
      ],
    },
    { name: "order", type: "number", label: "Ordinamento", defaultValue: 0 },
  ],
};

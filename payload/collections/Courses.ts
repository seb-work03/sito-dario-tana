import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Courses: CollectionConfig = {
  slug: "courses",
  labels: { singular: "Corso / Workshop", plural: "Corsi e Workshop" },
  admin: {
    group: "Servizi",
    useAsTitle: "title",
    defaultColumns: ["title", "type", "availability", "date"],
  },
  versions: { drafts: true },
  fields: [
    { name: "title", type: "text", label: "Titolo", required: true },
    { name: "slug", type: "text", label: "Slug", required: true, unique: true },
    { name: "subtitle", type: "text", label: "Sottotitolo" },
    { name: "description", type: "textarea", label: "Descrizione breve" },
    {
      name: "type",
      type: "select",
      label: "Tipologia",
      required: true,
      options: [
        { label: "Workshop", value: "workshop" },
        { label: "Webinar", value: "webinar" },
        { label: "Corso breve", value: "corso-breve" },
        { label: "Seminario", value: "seminario" },
        { label: "Percorso personalizzato", value: "percorso" },
      ],
    },
    {
      name: "content",
      type: "richText",
      label: "Programma e contenuto",
      editor: lexicalEditor({}),
    },
    {
      name: "audience",
      type: "textarea",
      label: "A chi è rivolto",
    },
    { name: "duration", type: "text", label: "Durata (es: 4 ore, 2 giornate)" },
    {
      name: "mode",
      type: "select",
      label: "Modalità",
      options: [
        { label: "In presenza", value: "presenza" },
        { label: "Online", value: "online" },
        { label: "Ibrida", value: "ibrida" },
      ],
    },
    { name: "date", type: "date", label: "Data (se programmato)" },
    { name: "location", type: "text", label: "Luogo" },
    { name: "seats", type: "number", label: "Posti disponibili" },
    {
      name: "availability",
      type: "select",
      label: "Disponibilità",
      defaultValue: "evergreen",
      options: [
        { label: "Sempre disponibile", value: "evergreen" },
        { label: "Prossimamente", value: "coming-soon" },
        { label: "Iscrizioni aperte", value: "open" },
        { label: "Completo", value: "full" },
        { label: "Concluso", value: "past" },
      ],
    },
    {
      name: "cta",
      type: "group",
      label: "CTA",
      fields: [
        { name: "label", type: "text", label: "Testo pulsante", defaultValue: "Richiedi informazioni" },
        { name: "url", type: "text", label: "URL (opzionale, altrimenti usa form contatti)" },
      ],
    },
    { name: "featuredImage", type: "upload", relationTo: "media", label: "Immagine" },
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

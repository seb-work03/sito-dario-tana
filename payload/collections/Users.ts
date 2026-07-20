import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  labels: { singular: "Utente", plural: "Utenti" },
  admin: { group: "Impostazioni", useAsTitle: "email" },
  fields: [
    { name: "name", type: "text", label: "Nome" },
    {
      name: "role",
      type: "select",
      label: "Ruolo",
      defaultValue: "editor",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
    },
  ],
};

import { defineField, defineType } from "sanity";

export default defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Name of Client",
      type: "string",
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "role",
      title: "Role",
      description: "Role of Client",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      description: "Quote of Client",
      type: "text",
    }),
  ],
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "published",
      title: "Published",
      description: "Do you want to publish this project?",
      type: "boolean",
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "Title of Testimonial",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Description of Testimonial",
      type: "text",
    }),
    defineField({
      name: "clients",
      title: "Clients",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "client" },
        },
      ],
    }),
  ],
});

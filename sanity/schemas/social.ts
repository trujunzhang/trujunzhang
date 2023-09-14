import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
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
      description: "Platform for social media",
      type: "string"
    }),
    defineField({
      name: "url",
      title: "href",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Image of Social Media",
      type: "image",
      options: {
          hotspot: true
      }
    }),
  ],
})

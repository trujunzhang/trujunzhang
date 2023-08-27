import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
          hotspot: true
      }
    }),
    defineField({
      name: "name",
      title: "Name",
      description: "Name of Skill",
      type: "string"
    }),
   defineField({
      name: "description",
      title: "Description",
      description: "Description of Skill",
      type: "string"
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "Title of Skill",
      type: "string"
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description: "Subtitle of Skill",
      type: "string"
    }),
    {
      name: "skill",
      title: "Skill",
      type: "blockContent"
    }
 ],
})

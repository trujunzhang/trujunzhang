import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
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
      description: "Title of the project",
      type: "string"
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text"
    }),
    defineField({
      name: "desktopImage",
      title: "Image of Desktop",
      type: "image",
      options: {
          hotspot: true
      }
    }),
    defineField({
      name: "mobileImage",
      title: "Image of Mobile",
      type: "image",
      options: {
          hotspot: true
      }
    }),
    defineField({
      name: "linkToGithub",
      title: "Link To Github",
      type: "url",
    }),
    defineField({
      name: "linkToFigma",
      title: "Link To Figma",
      type: "url",
    }),
    defineField({
      name: "linkToGooglePlay",
      title: "Link To Google Play",
      type: "url",
    }),
    defineField({
      name: "linkToAppStore",
      title: "Link To App Store",
      type: "url",
    }),
    defineField({
      name: "linkToWebSite",
      title: "Link To Web Site",
      type: "url",
    }),
    defineField({
      name: "liveLink",
      title: "Live Link",
      type: "url",
    }),
  ],
})

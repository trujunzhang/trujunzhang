import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    defineField({
      name: "madeIcon",
      title: "Made with Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "logoFooter",
      title: "Logo of Footer",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "githubUrl",
      title: "Github Url",
      type: "string",
    }),
    defineField({
      name: "upworkUrl",
      title: "Upwork Url",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "footerTitle",
      title: "Title of Footer",
      type: "string",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    }),
    defineField({
      name: "sayHi",
      title: "Say Hi",
      type: "string",
    }),
    defineField({
      name: "introduce",
      title: "Introduce",
      type: "text",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "backgroundInformation",
      title: "Background Information",
      type: "text",
    }),
    defineField({
      name: "profilePicture",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "social" },
        },
      ],
    }),
  ],
});

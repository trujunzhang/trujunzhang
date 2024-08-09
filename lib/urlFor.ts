import { ImageUrlBuilder } from "sanity";
import { client } from "../sanity/sanity.client";
import imageUrlBuilder from '@sanity/image-url'

const builder:ImageUrlBuilder = imageUrlBuilder(client)

const urlFor = (source: any):ImageUrlBuilder => {
    return builder.image(source)
}

export default urlFor;
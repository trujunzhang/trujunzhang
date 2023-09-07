import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "testimonial" && published == true] | order(_updatedAt)[0]{
        ...,
        clients[]->
    }
`;

const getTestimonial = async () => {
    const testimonial: Testimonial = await client.fetch(query);
    return testimonial;
}

export default getTestimonial;

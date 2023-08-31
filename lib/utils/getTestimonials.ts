import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "testimonial" && published == true] | order(_updatedAt){
        ...,
        clients[]->
    }
`;

const getTestimonials = async () => {
    const testimonials: Testimonial[] = await client.fetch(query);
    return testimonials;
}

export default getTestimonials;

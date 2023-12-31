import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "pageInfo"][0]{
        ...,
        projects[]->,
        skills[]->,
        testimonial-> {
            ...,
            clients[]->,
        },
        socials[]->
    }
`;

const getPageInfo = async () => {
    const pageInfo: PageInfo = await client.fetch(query);
    return pageInfo;
}

export default getPageInfo;

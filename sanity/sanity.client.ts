import {createClient, SanityClient} from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fxm1fn7l";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client: SanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})

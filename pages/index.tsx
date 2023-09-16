
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zhang | Designer, Frontend Developer & Mobile",
  description:
    "I design and code beautifully simple things, and I love what I do.",
  keywords: [
    "Portfolio",
    "Next.js",
    "Sanity.io",
    "React",
    "Framer Motion",
    "Developer",
  ],
  openGraph: {
    title: "Zhang | Designer, Frontend Developer & Mobile",
    description:
      "I design and code beautifully simple things, and I love what I do.",
    url: "https://trujunzhang.com",
    siteName: "Zhang's Portfolio",
    images: [
      {
        url: "https://aviral.xyz/og-image.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};



import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import StartAProject from "@/components/StartAProject";
import Footer from "@/components/Footer";
import Wrapper from "@/components/common/Wrapper";
import { getPageInfo } from "@/lib/utils";

export const getServerSideProps = (async (context) => {
  const pageInfo: PageInfo = await getPageInfo();
  return { props: { pageInfo } };
}) satisfies GetServerSideProps<{
  pageInfo: PageInfo;
}>;

const Home = ({
  pageInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const projects: Project[] = pageInfo.projects;
  const skills: Skill[] = pageInfo.skills;
  const testimonial: Testimonial = pageInfo.testimonial;

  return (
    <div className="">
      <section className="py-8 md:py-6" id="section-header">
        <Wrapper className="">
          <Header pageInfo={pageInfo} />
        </Wrapper>
      </section>

      <section
        className="flex flex-col items-center justify-center pt-20 sm:pt-16"
        id="section-hero"
      >
        <Wrapper className="">
          <Hero pageInfo={pageInfo} />
        </Wrapper>
      </section>

      <section
        className="pt-24 pb-56 xl:pb-56 sm:pb-56 sm:pt-16 bg-primary-600"
        id="section-about"
      >
        <About pageInfo={pageInfo} />
      </section>

      <section className="mt-[-174px]" id="section-skill">
        <Skills skills={skills} />
      </section>

      <section className="py-20 mx-[auto] sm:pb-2" id="section-project">
        <Wrapper className="">
          <Projects projects={projects} />
        </Wrapper>
      </section>

      <section className="py-20 mb-[120px]" id="section-Testimonials">
        <Testimonial testimonial={testimonial} />
      </section>

      <section
        className="pb-[60px] pt-20 mx-[auto] bg-primary-600"
        id="Section-doit"
      >
        <Wrapper className="">
          <StartAProject pageInfo={pageInfo} />
        </Wrapper>
      </section>

      <section className="py-10 bg-primary-600" id="Section-footer">
        <Footer pageInfo={pageInfo} />
      </section>
    </div>
  );
};

export default Home;

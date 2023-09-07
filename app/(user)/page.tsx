import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WorkExperience from "@/components/WorkExperience";
import StartAProject from "@/components/StartAProject";
import Footer from "@/components/Footer";
import {
  getExperience,
  getPageInfo,
  getProjects,
  getSkills,
  getSocials,
  getTestimonial,
} from "@/lib/utils";
import { client } from "@/sanity/sanity.client";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type Props = {};

// Next.js ISR every 60 seconds
export const revalidate = 60;

const Home = async (props: Props) => {
  const pageInfo: PageInfo = await getPageInfo();
  const experiences: Experience[] = await getExperience();
  const projects: Project[] = await getProjects();
  // const socials: Social[] = await getSocials();
  const skills: Skill[] = await getSkills();
  const testimonial: Testimonial = await getTestimonial();

  return (
    <div className="">
      <section className="pt-[32px] pb-[32px]" id="section-header">
        <Header pageInfo={pageInfo} />
      </section>

      <section
        className="max-w-[1280px] 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center 2xl:ml-[auto] 2xl:mr-[auto] ml-[auto] mr-[auto] block pb-[0px] pt-[88px] sm:pt-[32px]"
        id="section-hero"
      >
        <Hero pageInfo={pageInfo} />
      </section>

      <section
        className="pt-[84px] pb-[280px] sm:pb-[220px] sm:pt-[56px] bg-[#7c3aed]"
        id="section-about"
      >
        <About pageInfo={pageInfo} />
      </section>

      <section
        className="ml-[0px] mr-[0px] bg-opacity-[100%] pt-[0px] pb-[0px] mt-[-174px]"
        id="section-skill"
      >
        <Skills skills={skills} />
      </section>

      <section
        className="pb-[80px] pt-[80px] max-w-[1280px] ml-[auto] mr-[auto] sm:pb-[30px]"
        id="section-project"
      >
        <Projects projects={projects} />
      </section>

      <section
        className="pb-[80px] pt-[80px] mb-[120px]"
        id="section-Testimonials"
      >
        <Testimonials testimonial={testimonial} />
      </section>

      <section
        className="pb-[80px] pt-[80px] ml-[auto] mr-[auto] max-w-[auto] bg-[#7c3aed]"
        id="Section-doit"
      >
        <StartAProject />
      </section>

      <section className="pt-[40px] pb-[80px] bg-[#7c3aed]" id="Section-footer">
        <Footer pageInfo={pageInfo} />
      </section>
    </div>
  );
};

export default Home;

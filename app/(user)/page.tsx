import React from "react";

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import StartAProject from "@/components/StartAProject";
import Footer from "@/components/Footer";
import Wrapper from "@/components/common/Wrapper";
import {
  getExperience,
  getPageInfo,
  getProjects,
  getSkills,
  getTestimonial,
} from "@/lib/utils";

const Home = async () => {
  const pageInfo: PageInfo = await getPageInfo();
  const experiences: Experience[] = await getExperience();
  const projects: Project[] = await getProjects();
  const skills: Skill[] = await getSkills();
  const testimonial: Testimonial = await getTestimonial();

  return (
    <div className="">
      <section className="pt-[32px] pb-[32px]" id="section-header">
        <Wrapper className="">
          <Header pageInfo={pageInfo} />
        </Wrapper>
      </section>

      <section
        className="flex flex-col items-center justify-center pb-[0px] pt-[88px] sm:pt-[32px]"
        id="section-hero"
      >
        <Wrapper className="">
          <Hero pageInfo={pageInfo} />
        </Wrapper>
      </section>

      <section
        className="pt-[84px] pb-[280px] sm:pb-[220px] sm:pt-[56px] bg-[#7c3aed]"
        id="section-about"
      >
        <About pageInfo={pageInfo} />
      </section>

      <section
        className="mt-[-174px]"
        id="section-skill"
      >
        <Skills skills={skills} />
      </section>

      <section
        className="pb-[80px] pt-[80px] mx-[auto] sm:pb-[30px]"
        id="section-project"
      >
        <Wrapper className="">
        <Projects projects={projects} />
        </Wrapper>
      </section>

      <section
        className="py-[80px] mb-[120px]"
        id="section-Testimonials"
      >
        {/* <Wrapper className=""> */}
        <Testimonial testimonial={testimonial} />
        {/* </Wrapper> */}
      </section>

      <section
        className="pb-[60px] pt-[80px] ml-[auto] mr-[auto] max-w-[auto] bg-[#7c3aed]"
        id="Section-doit"
      >
        <StartAProject pageInfo={pageInfo} />
      </section>

      <section className="pt-[40px] pb-[40px] bg-[#7c3aed]" id="Section-footer">
        <Footer pageInfo={pageInfo} />
      </section>
    </div>
  );
};

export default Home;

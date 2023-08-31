import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
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
  getTestimonials,
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
  const socials: Social[] = await getSocials();
  const skills: Skill[] = await getSkills();
  const testimonials: Testimonial[] = await getTestimonials();

  // console.log('testimonials', testimonials[0]);

  return (
    <div className="bg-green-700 text-white">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center bg-primary-700 pb-[300px]">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-start -mt-[200px]">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="section-body section-padding-top">
        <Projects projects={projects} />
      </section>

      {testimonials.length > 0 && (
        <section id="testimonials" className="snap-center">
          <Testimonials testimonial={testimonials[0]} />
        </section>
      )}

      <section id="startAProject" className="relative offset-background">
        <div className="mx-20 py-20 px-4 bg-yellow-400 z-10">
          <StartAProject />
        </div>
      </section>

      <section id="footer" className="bg-primary-700">
        <Footer />
      </section>

      <section id="contact" className="snap-start">
        {/* <ContactMe pageInfo={pageInfo} /> */}
      </section>
    </div>
  );
};

export default Home;

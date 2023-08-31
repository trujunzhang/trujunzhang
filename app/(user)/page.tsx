import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WorkExperience from "@/components/WorkExperience";
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
    <div className="bg-white text-white snap-mandatory snap-y z-0 pb-[600px]">
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

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {testimonials.length > 0 && (
        <section id="testimonials" className="snap-center">
          <Testimonials testimonial={testimonials[0]} />
        </section>
      )}

      <section id="contact" className="snap-start">
        {/* <ContactMe pageInfo={pageInfo} /> */}
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            {/* <ArrowUpCircleIcon className='h-8 w-8 rounded-full opacity-20 hover:opacity-50 transition ease-in-out select-none' /> */}
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

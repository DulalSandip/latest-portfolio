/* eslint-disable react/jsx-key */
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ultimodeallandingPage from "@/assets/images/ultimodeal_web.jpg";
import ultimodealMoblandingPage from "@/assets/images/ultimodeal_mobapp.jpg";

import annapurnaGalleriesLandingPage from "@/assets/images/annapurna galleries.png";
import aitcHomesLandingPage from "@/assets/images/aitchomes.png";
import aitcHomesLanding from "@/assets/images/aitchomes_landing.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Ultimodeal",
    year: "2020 to 2022",
    title: "E-commerce website , Mobile App",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Database Cost Optimization" },
    ],
    link: "https://ultimodeal.com.np",
    image: ultimodeallandingPage,
  },
  {
    company: "AITC International",
    year: "2022 to 2023",
    title: "Annapurna Galleries",
    results: [
      { title: "Deployed cloud-based solutions" },
      { title: "Streamlined deployment process with CI/CD pipelines" },
      { title: "Led successful IT projects with on-time delivery" },
    ],
    link: "https://annapurnagalleries.com/",
    image: annapurnaGalleriesLandingPage,
  },
  {
    company: "AITC International",
    year: "2023 to 2024",
    title: "Apartment Management System",
    results: [
      { title: "Lead the project as a CTO" },
      { title: "Timely delivery of Mobile app and Apartment Panel" },
      { title: "Improved its UI/UX Design according to stakeholder needs." },
    ],
    link: "https://aitchomes.com/",
    image: aitcHomesLanding,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className=" pb-16 lg:py-24">
      <div className="container ">
        <SectionHeader
          eyebrow=" Real-World Results"
          title=" Featured Projects"
          description=" See how I transformed concepts into engaging digital experiences"
        />

        <div className=" md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            // <div
            //   key={project.title}
            //   className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10  after:content-[''] after:absolute after:inset-0 after:bg-red-500"
            // >
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `${64 + projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className=" font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className=" border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className=" flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className=" size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className=" bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold mt-8 inline-flex items-center justify-center gap-2">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0  lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

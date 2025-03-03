"use client";

import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import AWSIcon from "@/assets/icons/aws.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import PostgreSqlIcon from "@/assets/icons/postgresql.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import AzureDevopsIcon from "@/assets/icons/azure-devops.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Nodejs",
    iconType: NodejsIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "AWS",
    iconType: AWSIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreSqlIcon,
  },
  {
    title: "Next JS",
    iconType: NextjsIcon,
  },
  {
    title: "Azure Devops",
    iconType: AzureDevopsIcon,
  },
];

const hobbies = [
  {
    title: "Videography",
    emoji: "🎥",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🚶‍♀️‍➡️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Learner",
    emoji: "🙎‍♂️",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "💪",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className=" py-20 lg:py-28 parallax">
      <div className="  container ">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, What I do, and What inspires me"
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />

              <div className="w-40 mx-auto mt-2 md:mt-0 hover:scale-110 hover:-translate-y-3 transition-transform duration-300">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft my digital
                experience."
                className=""
              />

              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 "
                // itemsWrapperClassName="-translate-x-1/2"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className=" grid grid-cols-1 gap-8  md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <div>
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm."
                  className="px-6 py-6"
                />
              </div>

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer group"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    {/* Title and Emoji */}
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>

                    {/* Tooltip Container */}
                    <div
                      className="absolute bottom-full invisible left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap border border-gray-300 rounded-full bg-white py-2 px-4 text-xs text-gray-800 font-medium transition-opacity duration-300 shadow-[0px_12px_30px_-4px_rgba(16,24,40,0.08)] group-hover:opacity-100 group-hover:visible"
                      role="tooltip"
                      data-tooltip-target="default-tooltip"
                    >
                      Drag to easily move and interact.
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 outline outline-gray-950/30">
                <div className=" absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s] "></div>
                <Image
                  src={smileEmoji}
                  alt="smiling memoji"
                  className=" size-20 "
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

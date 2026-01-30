"use client";
import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    id: "js_ts",
    name: (
      <>
        JavaScript
        <br />
        TypeScript
      </>
    ),
    icon: <SiJavascript />,
    percentage: "Avançado",
  },
  {
    id: "react",
    name: (
      <>
        ReactJS
        <br />
        React Native
      </>
    ),
    icon: <SiReact />,
    percentage: "Avançado",
  },
  {
    id: "next",
    name: <>NextJS</>,
    icon: <SiNextdotjs />,
    percentage: "Avançado",
  },
  {
    id: "node",
    name: <>NodeJs</>,
    icon: <SiNodedotjs />,
    percentage: "Intermediário",
  },
  {
    id: "python",
    name: <>Python</>,
    icon: <SiTailwindcss />,
    percentage: "Intermediário",
  },
  {
    id: "java",
    name: <>Java</>,
    icon: <SiTypescript />,
    percentage: "Básico",
  },
];

const Skills = () => {
  return (
    <div className="text-gray-600 dark:text-white pt-16 pb-30">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground dark:text-white">
        Minhas <span className="text-[#42569d] dark:text-cyan-200">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, i) => {
          return (
            <Tilt key={skill.id} scale={1.2} transitionSpeed={400}>
              <div
                data-aos="flip-right"
                data-aos-anchor-placement="top-center"
                data-aos-offset="-200"
                data-aos-delay={i * 100}
                className=" bg-[#14134145] text-center h-48 w-40 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105 cursor-default"
              >
                <div className="text-5xl mb-4 text-gray-600 dark:text-gray-500">
                  {skill.icon}
                </div>
                <p className="text-#[39436a] mt-1 leading-none">{skill.name}</p>
                <p className="text-lg font-bold">{skill.percentage}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

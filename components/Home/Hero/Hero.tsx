"use client";

import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-foreground dark:text-white overflow-hidden">
      <ParticleBackground />

      <div className="z-10 relative flex flex-col items-center">
        <Image
          src={"/images/Author.jpg"}
          alt="heroimage"
          height={150}
          width={150}
          className="rounded-full border-8 border-[#a8acbbd9]"
          data-aos="fade-up"
        ></Image>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
          Creating web products, <br />
          brands
          <span className="text-[#42569d] dark:text-cyan-200"> and experiences.</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi! I&apos;m Caio - A Passionate&nbsp;{" "}
          <span className="text-[#42569d] dark:text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "p1-2",
              }}
            />
          </span>
        </h2>
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
        >
          <span className="text-white">See my work</span>
          <BsArrowRight className="h-5 w-5 ml-2 inline-block text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

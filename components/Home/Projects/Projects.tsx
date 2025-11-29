import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground dark:text-white">
        A small selection of recent <br />
        <span className="text-[#42569d] dark:text-cyan-200">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* 1° Project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <Image
            alt="photo"
            src="/images/Sleek3.png"
            height={650}
            width={800}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground dark:text-white">
            Sleek
          </h1>
          <h1 className="pt-0.5 font-medium text-gray-400 dark:text-white/80">
            Apps, UI/UX
          </h1>
        </div>
        {/* 2° Project */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <Image
            alt="photo"
            src="/images/Genesis3.png"
            height={650}
            width={800}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground dark:text-white">
            Genesis Robotics
          </h1>
          <h1 className="pt-0.5 font-medium text-gray-400 dark:text-white/80">
            Apps, UI/UX
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;

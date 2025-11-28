import React from "react";
import ResumeCard from "./ResumeCard";
import { FaBookReader, FaPython } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 gap-10">
        {/* EDUCATION PART */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-20">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
              <ResumeCard
                Icon={FaBookReader}
                role="Sistemas de informação - UNINASSAU"
                date="Jan 2021 - Dez 2026"
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
            >
              <ResumeCard
                Icon={FaPython}
                role="Desenvolvimento Web Completo - Udemy"
                date="141 horas"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-offset="-200"
            >
              <ResumeCard
                Icon={BiBadge}
                role="Python 3 do básico ao avançado - Udemy"
                date="120 horas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

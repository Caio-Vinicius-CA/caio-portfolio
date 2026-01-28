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
          <h1 className="text-3xl sm:text-4xl font-bold  text-foreground dark:text-white text-center">
            My{" "}
            <span className="text-[#42569d] dark:text-cyan-200">Education</span>
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-20">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
              <ResumeCard
                Icon={FaBookReader}
                role="Sistemas de informação - UNINASSAU"
                date="Jan 2021 - Dez 2026"
                desc="Graduação com foco em desenvolvimento de software, bancos de dados, análise de sistemas, fundamentos de dados e tecnologia aplicada à resolução de problemas do mundo real."
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
            >
              <ResumeCard
                Icon={BiBadge}
                role="Desenvolvimento Web Completo - Udemy"
                date="141 horas"
                desc="Curso aprofundado de desenvolvimento web que engloba HTML, CSS, JavaScript, TypeScript, React e Next.js, com projetos práticos, melhores práticas e desenvolvimento front-end moderno."
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-offset="-200"
            >
              <ResumeCard
                Icon={FaPython}
                role="Python 3 do básico ao avançado - Udemy"
                date="120 horas"
                desc="Curso de Python que abrange fundamentos de programação, estruturas de dados, automação, manipulação de arquivos e projetos práticos para fortalecer as habilidades de resolução de problemas e codificação."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

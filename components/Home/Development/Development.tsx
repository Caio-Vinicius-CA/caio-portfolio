import React from "react";
import DevCard from "./DevCard";

const Development = () => {
  return (
    <div className="pt-16 pb-24">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground dark:text-white">
        Professional{" "}
        <span className="text-[#42569d] dark:text-cyan-200">Development</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          data-aos-offset="-100"
        >
          {/* Card 1 */}
          <DevCard
            image="/images/FUST.png"
            date="10 Nov 2025"
            title="Grupo de Estudo Metodologia da investigação ciêntifica"
            entity="FUST"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          data-aos-offset="-100"
        >
          {/* Card 2 */}
          <DevCard
            image="/images/Akad.jpg"
            date="17 Dez 2025"
            title="Introdução ao Desenvolvimento FullStack com a Akad"
            entity="DIO"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
          data-aos-offset="-100"
        >
          {/* Card 3 */}
          <DevCard
            image="/images/Project1.png"
            date="12 Jan 2026"
            title="Iniciado projeto de Sistema de Gestão Financeira"
            entity="Privado"
          />
        </div>
      </div>
    </div>
  );
};

export default Development;

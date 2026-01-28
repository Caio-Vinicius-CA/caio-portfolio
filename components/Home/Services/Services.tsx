import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground dark:text-white mb-30">
        Colaborando com marcas <br /> e empresas para alcançar <br /> resultados
        impactantes
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-12 sm:mt-16 md:mt-20 xl:mt-28">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-offset="-100"
        >
          <ServiceCard
            icon={{
              light: "/images/s1_light.svg",
              dark: "/images/s1.svg",
            }}
            name="UX e UI"
            description="Criação de interfaces intuitivas com foco em usabilidade e experiência do usuário."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          data-aos-offset="-100"
        >
          <ServiceCard
            icon={{
              light: "/images/s2_light.svg",
              dark: "/images/s2.svg",
            }}
            name="Aplicações Web e Mobile"
            description="Aplicações web e mobile modernas, responsivas e performáticas."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
          data-aos-offset="-100"
        >
          <ServiceCard
            icon={{
              light: "/images/s3_light.svg",
              dark: "/images/s3.svg",
            }}
            name="Design e Criatividade"
            description="Soluções visuais criativas para produtos digitais consistentes."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
          data-aos-offset="-100"
        >
          <ServiceCard
            icon={{
              light: "/images/s4_light.svg",
              dark: "/images/s4.svg",
            }}
            name="Desenvolvimento de Software"
            description="Implementação de soluções de software utilizando tecnologias modernas."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

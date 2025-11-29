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
          {" "}
          <DevCard
            image="/images/bb2.png"
            date="10 Nov 2025"
            title="Lorem ipsum dolor sit ametaaaaaaaaaaaaaa"
            entity="FUST"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
          data-aos-offset="-100"
        >
          {" "}
          <DevCard
            image="/images/bb3.png"
            date="10 Nov 2025"
            title="Lorem ipsum dolor sit ametaaaaaaaaaaaaaa"
            entity="FUST"
          />
        </div>
      </div>
    </div>
  );
};

export default Development;

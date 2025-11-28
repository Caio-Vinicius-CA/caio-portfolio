import React from "react";
import DevCard from "./DevCard";

const Development = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Professional <span className="text-cyan-300">Development</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        <div>
          <DevCard
            image="/images/bb1.png"
            date="10 Nov 2025"
            title="Grupo de Estudo Metodolofia da investigaçõa ciêntifica"
            entity="FUST"
          />
        </div>
        <div>
          {" "}
          <DevCard
            image="/images/bb2.png"
            date="10 Nov 2025"
            title="Lorem ipsum dolor sit ametaaaaaaaaaaaaaa"
            entity="FUST"
          />
        </div>
        <div>
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

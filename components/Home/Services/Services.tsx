import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collaborate with brand <br /> and agencies to create <br /> impactful
        results
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-12 sm:mt-16 md:mt-20 xl:mt-28">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/sb10.png"
            name="UX and UI"
            description="Designing interfaces that are intuitive, efficient and enjoyable to use."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            icon="/images/sb20.png"
            name="Web and Mobile Apps"
            description="Designing interfaces that are intuitive, efficient and enjoyable to use."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            icon="/images/sb30.png"
            name="Design and Creativity"
            description="Designing interfaces that are intuitive, efficient and enjoyable to use."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServiceCard
            icon="/images/sb40.png"
            name="Development"
            description="Designing interfaces that are intuitive, efficient and enjoyable to use."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

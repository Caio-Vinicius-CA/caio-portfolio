"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Development from "./Development/Development";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <div id="inicio">
        <Hero />
      </div>
      <div id="servicos">
        <Services />
      </div>
      <div id="formacoes">
        <Resume />
      </div>
      <div id="projetos">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="desenvolvimento">
        <Development />
      </div>
      <div id="contato">
        <Contact />
      </div>
    </div>
  );
};

export default Home;

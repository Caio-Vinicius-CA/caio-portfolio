import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-gray-200 -mb-3">
            Entre em{" "}
            <span className="text-[#42569d] dark:text-cyan-200">Contato</span>{" "}
            comigo para resolver seus problemas
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Entre em contato hoje mesmo e vamos discutir como posso ajudá-lo a
            alcançar seus objetivos.
          </p>
          <div className="mt-7">
            {/* Phone */}
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-blue-950/60 dark:text-cyan-200" />
              <p className="text-md font-bold text-gray-400">
                (81) 9&thinsp;9146-8272
              </p>
            </div>{" "}
            {/* Email */}
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-blue-950/60 dark:text-cyan-200" />
              <p className="text-md font-bold text-gray-400">
                amaralvinicaio.2003@gmail.com
              </p>
            </div>
            {/* Map */}
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-blue-950/60 dark:text-cyan-200" />
              <p className="text-md font-bold text-gray-400">
                Recife, Pernambuco
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center mt-8 space-x-3">
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300">
                <FaFacebook className="text-white w-6 h-6" />
              </div>
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300">
                <FaLinkedin className="text-white w-6 h-6" />
              </div>
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300">
                <FaTwitter className="text-white w-6 h-6" />
              </div>
              <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300">
                <FaGithub className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="md:p-10 p-5 bg-blue-950/80 dark:bg-[#131332] rounded-lg"
        >
          <input
            type="text"
            placeholder="Nome"
            className=" px-4 py-3.5 bg-[#26255345] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="email"
            placeholder="Email"
            className=" px-4 py-3.5 mt-6 bg-[#26255345] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="text"
            placeholder="Telefone"
            className=" px-4 py-3.5 mt-6 bg-[#26255345] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <textarea
            placeholder="Sua mensagem"
            className="resize-none px-4 py-3.5 mt-6 bg-[#26255345] text-white outline-none rounded-md w-full placeholder:text-white/70 h-40"
          ></textarea>
          <button className="mt-8 px-12 py-4 bg-[#39436a] dark:bg-blue-950 hover:bg-blue-950 hover:dark:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

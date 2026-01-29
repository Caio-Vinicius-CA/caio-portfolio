import React, { useRef } from "react"; // 1. Importe o useRef
import emailjs from "@emailjs/browser"; // 2. Importe a biblioteca
import { BiEnvelope } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null); // 3. Crie a referência para o formulário

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Substitua os IDs abaixo pelos seus IDs reais do painel do EmailJS
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          form.current?.reset(); // Limpa o formulário após o envio
        },
        (error: unknown) => {
          let msg: string;
          if (typeof error === "string") msg = error;
          else if (
            typeof error === "object" &&
            error !== null &&
            "text" in error
          ) {
            const maybeText = (error as Record<string, unknown>)["text"];
            msg = typeof maybeText === "string" ? maybeText : String(error);
          } else msg = String(error);
          alert("Erro ao enviar: " + msg);
        },
      );
  };

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
        {/* Formulário Ajustado */}
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="zoom-in"
          className="md:p-10 p-5 bg-blue-950/80 dark:bg-[#131332] rounded-lg"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Nome"
            required
            className="px-4 py-3.5 bg-[#26255345] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Email"
            required
            className="px-4 py-3.5 mt-6 bg-[#26255345] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            className="px-4 py-3.5 mt-6 bg-[#26255345] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            required
            className="resize-none px-4 py-3.5 mt-6 bg-[#26255345] text-white outline-none rounded-md w-full placeholder:text-white/70 h-40"
          ></textarea>

          <button
            type="submit" // Garanta que o botão seja do tipo submit
            className="mt-8 px-12 py-4 bg-[#39436a] dark:bg-blue-950 hover:bg-blue-950 hover:dark:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaCode } from "react-icons/fa"; // Exemplo de ícones

export function LogoToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect apenas para garantir que o componente está montado no cliente
  // isso evita erros de hidratação (quando o servidor renderiza uma coisa e o cliente outra)
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Renderiza um placeholder ou a logo estática enquanto carrega para não pular layout
    return <span className="text-xl font-bold cursor-pointer">Caio Vinícius</span>;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800 group"
      aria-label="Alternar tema"
    >
      {/* Aqui é a parte visual da sua Logo */}
      <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-md">
        <FaCode size={20} />
      </div>

      <div className="flex flex-col items-start">
        <span className="font-bold text-lg leading-none">CaioVinícius</span>
        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors">
          {theme === "light" ? "Toque para Escuro" : "Toque para Claro"}
        </span>
      </div>

      {/* Ícone indicador (opcional) */}
      <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </div>
    </button>
  );
}

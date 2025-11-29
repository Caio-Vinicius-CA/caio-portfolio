"use client";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

type IconPaths = {
  light: string;
  dark: string;
};

type Props = {
  icon: IconPaths;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  const { theme } = useTheme();

  const iconSrc = theme === "dark" ? icon.dark : icon.light;

  return (
    <div>
      <Image
        alt={name}
        src={iconSrc}
        width={60}
        height={60}
        // Garante que o CSS não modifique o height ou width independentemente
        className="w-[60px] h-[60px]"
        // Opcional: Adiciona 'object-fit' se o SVG tiver proporções estranhas
        style={{ objectFit: "contain" }}
      />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-foreground dark:text-gray-200">
        {name}
      </h1>
      <p className="mt-6 text-foreground dark:text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;

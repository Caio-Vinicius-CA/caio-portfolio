"use client";

import React from "react";
import Particle from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { useTheme } from "next-themes";
import { useMemo } from "react";

// Defina as cores dinâmicas
const DARK_COLOR = "#00BFFF"; // Exemplo: Ciano brilhante para tema escuro (fundo preto)
const LIGHT_COLOR = "#3F7FBF"; // Exemplo: Azul marinho escuro para tema claro (fundo branco)

export default function ParticleBackground() {
  const { theme } = useTheme();

  async function loadingParticle(main: Engine) {
    await loadFull(main);
  }

  // Define as opções dinâmicas usando useMemo para performance
  const particleOptions = useMemo(() => {
    // Escolhe a cor com base no tema
    const dynamicColor = theme === "light" ? LIGHT_COLOR : DARK_COLOR;

    return {
      autoPlay: true,
      background: {
        color: { value: "transparent" },
        opacity: 0,
      },
      clear: true,
      fullScreen: {
        enable: true,
        // É importante que o zIndex seja baixo para que as partículas fiquem no fundo
        zIndex: -1,
      },
      // ... (Restante das configurações globais)
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: true, mode: ["push", "remove"] },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: { enable: false, force: 2, smooth: 10 },
          },
          resize: { delay: 0.5, enable: true },
        },
        // ... (Restante das configurações de modos)
      },
      particles: {
        // --- COR DAS PARTÍCULAS (ATUALIZADO) ---
        color: {
          value: dynamicColor, // <--- APLICAÇÃO DA COR DINÂMICA
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 20,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            s: {
              count: 0,
              enable: true,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            l: {
              count: 0,
              enable: false,
              speed: 20,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
          },
        },
        move: {
          enable: true,
          speed: 2, // Ajustei a velocidade para 2 (pode mudar)
          // ... (Restante das configurações de move)
        },
        number: {
          density: { enable: true, width: 1920, height: 1080 },
          value: 80,
          limit: 100,
        },
        opacity: {
          value: 0.4, // Opacidade que mantém as partículas sutis
          // ... (Restante das configurações de opacity)
        },
        // --- COR DAS LINHAS/LINKS (ATUALIZADO) ---
        links: {
          blink: false,
          color: {
            value: dynamicColor, // <--- APLICAÇÃO DA COR DINÂMICA
          },
          consent: false,
          distance: 150,
          enable: true,
          frequency: 1,
          opacity: 0.4,
          shadow: {
            blur: 5,
            color: { value: "#000" },
            enable: false,
          },
          triangles: { enable: false, frequency: 1 },
          width: 1,
          warp: false,
        },
        // ... (Restante das configurações de particles)
      },
      // ... (Restante das configurações do options)
    };
  }, [theme]); // <--- CRUCIAL: O useMemo recalcula quando o 'theme' muda.

  return (
    <Particle
      id="tsparticles"
      init={loadingParticle}
      className="-z-10"
      options={particleOptions as never}
    />
  );
}


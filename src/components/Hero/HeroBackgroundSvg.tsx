"use client";

import React from "react";

const HeroBackgroundSvg = () => {
  return (
    <svg
      viewBox="0 0 1440 800"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-auto pointer-events-none -z-10"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Degradado principal de los cubos (Verde esmeralda / Azulado a Morado) */}
        <linearGradient id="cube-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>

        {/* Variación de sombra para dar profundidad 3D a las caras laterales */}
        <linearGradient id="cube-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#047857" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#5B21B6" stopOpacity="0.9" />
        </linearGradient>

        {/* Patrón de líneas diagonales estéticas del lateral derecho */}
        <pattern id="diagonal-lines" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="20" stroke="#06B6D4" strokeWidth="4" opacity="0.15" />
        </pattern>
      </defs>

      {/* GRUPO LATERAL IZQUIERDO */}
      <g transform="translate(40, 600)" opacity="0.85">
        <g transform="translate(0, 40)">
          <polygon points="40,0 80,20 40,40 0,20" fill="url(#cube-grad)" />
          <polygon points="0,20 40,40 40,90 0,70" fill="url(#cube-shadow)" />
          <polygon points="40,40 80,20 80,70 40,90" fill="url(#cube-grad)" opacity="0.7" />
        </g>
        <g transform="translate(50, -30)">
          <polygon points="25,0 50,12 25,25 0,12" fill="url(#cube-grad)" />
          <polygon points="0,12 25,25 25,55 0,42" fill="url(#cube-shadow)" />
          <polygon points="25,25 50,12 50,42 25,55" fill="url(#cube-grad)" opacity="0.8" />
        </g>
      </g>

      {/* GRUPO LATERAL DERECHO */}
      <g transform="translate(1220, 200)">
        <rect x="-60" y="80" width="120" height="200" fill="url(#diagonal-lines)" />
        <g transform="translate(0, 0)">
          <polygon points="60,0 120,30 60,60 0,30" fill="url(#cube-grad)" />
          <polygon points="0,30 60,60 60,130 0,100" fill="url(#cube-shadow)" />
          <polygon points="60,60 120,30 120,100 60,130" fill="url(#cube-grad)" opacity="0.75" />
        </g>
        <g transform="translate(-40, 90)">
          <polygon points="50,0 100,25 50,50 0,25" fill="url(#cube-grad)" />
          <polygon points="0,25 50,50 50,110 0,85" fill="url(#cube-shadow)" />
          <polygon points="50,50 100,25 100,85 50,110" fill="url(#cube-grad)" opacity="0.8" />
        </g>
        <g transform="translate(20, 220)">
          <polygon points="70,0 140,35 70,70 0,35" fill="url(#cube-grad)" />
          <polygon points="0,35 70,70 70,150 0,115" fill="url(#cube-shadow)" />
          <polygon points="70,70 140,35 140,115 70,150" fill="url(#cube-grad)" opacity="0.7" />
        </g>
      </g>
    </svg>
  );
};

export default HeroBackgroundSvg;


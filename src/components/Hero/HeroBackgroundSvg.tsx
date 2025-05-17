// components/HeroBackgroundSvg.tsx
"use client";

const HeroBackgroundSvg = () => {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-auto pointer-events-none z-0"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient)"
        fillOpacity="0.25"
        d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,112C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
      />
    </svg>
  );
};

export default HeroBackgroundSvg;


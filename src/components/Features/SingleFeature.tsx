import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="h-full w-full">
      {/* Card principal con soporte completo para Light y Dark Mode */}
      <div
        className="wow fadeInUp relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-transparent dark:bg-[#0d1527] dark:text-slate-200 dark:shadow-2xl"
        data-wow-delay=".15s"
      >
        {/* 1. Fondo con Luces Binaurales Animadas en Bucle (Solo en Modo Oscuro) */}
        <div
          className="animate-binaural-flow pointer-events-none absolute inset-0 hidden rounded-2xl transition-opacity duration-300 dark:block"
          style={{
            background:
              "linear-gradient(135deg, #06b6d4 0%, #3b82f6 25%, #a855f7 50%, #06b6d4 75%, #3b82f6 100%)",
            backgroundSize: "300% 300%",
            boxShadow: "0 0 18px rgba(59, 130, 246, 0.25)",
          }}
        />

        {/* 2. Máscara interior para dejar ver solo el borde fluido de 1.5px */}
        <div
          className="absolute inset-[1.5px] z-0 hidden rounded-[15px] dark:block"
          style={{
            background:
              "linear-gradient(180deg, #132240 0%, #0d172c 40%, #090e1a 100%)",
          }}
        />

        {/* 3. Contenido estructurado */}
        <div className="relative z-10 flex h-full flex-1 flex-col items-start">
          {/* Contenedor del Ícono */}
          <div className="mb-6 flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-600 dark:border-blue-500/30 dark:bg-blue-950/80 dark:text-blue-400">
            {icon}
          </div>

          {/* Título */}
          <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>

          {/* Descripción */}
          <p className="flex-1 pr-[10px] text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300/80">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;

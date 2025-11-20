"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroBackgroundSvg from "./HeroBackgroundSvg";
// SVG externo

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-20 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <HeroBackgroundSvg /> {/* Fondo SVG animado */}
      <div className="container">
        <div className="flex justify-center">
          <motion.div
            className="max-w-[800px] text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-6 text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Potencia tu negocio con un eCommerce o Landing Page diseñados para vender
            </h1>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
              Atrae más clientes, aumenta tus ventas y optimiza cada clic con una plataforma hecha a tu medida. ¡Convierte visitantes en ventas hoy mismo!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="Telf:51992870423"
                className="rounded bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-primary/80"
              >
                🔥 Llamanos
              </Link>
              <Link
                href="https://github.com/djvamps"
                className="rounded bg-black px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-black/90 dark:bg-white/10 dark:hover:bg-white/20"
              >
                Escribenos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SVG decorativo separado */}
      <HeroBackgroundSvg />
    </section>
  );
};

export default Hero;

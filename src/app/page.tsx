import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Agencia de Marketing - Pengrafic",
  description: "Estas en Internt luego existes, somos una agencia integral creativa. Realizamos proyectos de imagen, diseño, desarrollo web, aplicasiones moviles.",
  
  other: {
    keywords: "marketing digital, diseño gráfico, audiovisuales, web, ecommerce, publicidad, redes sociales, SEO, contenido digital", // Agrega tus keywords aquí
  },

  // other metadata
};

export default function Home() {
  return (
    <>
      <WhatsAppButton />
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}

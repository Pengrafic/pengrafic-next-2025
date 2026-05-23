import { Metadata } from "next";
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
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Agencia de Marketing - Pengrafic",
  description:
    "Estas en Internet luego existes, somos una agencia integral creativa. Realizamos proyectos de imagen, diseño, desarrollo web, aplicaciones móviles.",
  keywords:
    "marketing digital, diseño gráfico, audiovisuales, web, ecommerce, publicidad, redes sociales, SEO, contenido digital",
  alternates: {
    canonical: "https://pengrafic.com",
  },
  openGraph: {
    title: "Agencia de Marketing - Pengrafic",
    description:
      "Estas en Internet luego existes, somos una agencia integral creativa.",
    url: "https://pengrafic.com",
    siteName: "Pengrafic",
    images: [
      {
        url: "https://pengrafic.com/images/pengrafic_flyer_face_2025.webp",
        width: 1200,
        height: 630,
        alt: "Pengrafic - Agencia de Marketing Digital",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia de Marketing - Pengrafic",
    description:
      "Estas en Internet luego existes, somos una agencia integral creativa.",
    images: ["https://pengrafic.com/images/pengrafic_flyer_face_2025.webp"],
  },
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
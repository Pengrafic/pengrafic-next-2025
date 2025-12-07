import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto Pengrafic | Agencia de Marketing",
  description: "Estas en Internt luego existes, somos una agencia integral creativa. Realizamos proyectos de imagen, diseño, desarrollo web, aplicasiones moviles.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contactarnos"
        description="Estas en Internt luego existes, somos una agencia integral creativa. Realizamos proyectos de imagen, diseño, desarrollo web, aplicasiones moviles."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

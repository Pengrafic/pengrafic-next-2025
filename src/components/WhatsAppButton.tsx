import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Nombre correcto del ícono

const WhatsAppButton = () => {
  const phoneNumber = "51992878423"; // Reemplaza con tu número

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
      style={{
        backgroundColor: "#25D366", // Verde oficial de WhatsApp
        color: "white",
        border: "2px solid white",
        zIndex: 1000,
      }}
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;

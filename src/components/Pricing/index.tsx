"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Precios sencillos y asequibles"
          paragraph="Potencia tu Negocio con Planes Hechos a tu Medida."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensual
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Anual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Plan Lite */}
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "700" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Landing Page Web. Ideal para campañas específicas, lanzamientos rápidos o profesionales independientes."
            link="https://pay.hotmart.com/F106972789V" // <-- Agregado aquí
          >
            <OfferList text="Diseño UX/UI 100% Personalizado" status="active" />
            <OfferList
              text="Estructura Enfocada en Conversión (CRO)"
              status="active"
            />
            <OfferList
              text="1 Página (Secciones ilimitadas de scroll)"
              status="active"
            />
            <OfferList
              text="Integración con Formulario y WhatsApp"
              status="active"
            />
            <OfferList
              text="Optimización de Velocidad y SEO Básico"
              status="active"
            />
            <OfferList
              text="Integración de Pasarela de Pagos / Catálogo"
              status="inactive"
            />

            <OfferList
              text="CMS / Gestor de Contenidos Autoadministrable"
              status="inactive"
            />
          </PricingBox>

          {/* Plan Basic */}
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="E-commerce. Ideal para marcas que buscan vender productos físicos o digitales en línea."
            link="https://pay.hotmart.com/A106974176S"
          >
            <OfferList
              text="Catálogo de Productos y Carrito de Compras"
              status="active"
            />
            <OfferList
              text="Pasarela de Pagos (Stripe, PayPal, MercadoPago, etc.)"
              status="active"
            />
            <OfferList text="Gestión de Inventario y Pedidos" status="active" />
            <OfferList text="Panel Autoadministrable (CMS)" status="active" />
            <OfferList
              text="Integración con Pixel (Meta/Google Ads)"
              status="active"
            />
            <OfferList
              text="Capacitación de Uso para el Cliente"
              status="active"
            />
            <OfferList
              text="Arquitectura Web a Medida Completa"
              status="inactive"
            />
          </PricingBox>

          {/* Plan Plus */}
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "1500" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Web Corporativa. Ideal para empresas consolidadas que necesitan autoridad, múltiples páginas y máxima velocidad."
            link="https://pay.hotmart.com/T106974789Q"
          >
            <OfferList
              text="Sitio Web Multi-página (Home, Nosotros, Servicios, Blog, Contacto)"
              status="active"
            />
            <OfferList
              text="Desarrollo a Medida (High Performance)"
              status="active"
            />
            <OfferList
              text="SEO Técnico Avanzado y Optimización de Carga"
              status="active"
            />
            <OfferList
              text="Panel Autoadministrable o Blog Integrado"
              status="active"
            />
            <OfferList
              text="Integración con CRM / Email Marketing"
              status="active"
            />
            <OfferList
              text="Seguridad SSL, Dominio y Configuración de Hosting"
              status="active"
            />
            <OfferList
              text="Soporte Técnico y Garantía Post-Lanzamiento"
              status="active"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;

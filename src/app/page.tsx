'use client';

import VideoBackground from "@/components/VideoBackground";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import FinalSection from "@/components/FinalSection";
import { motion } from "framer-motion";

const data = {
  quinceanera: {
    nombre: "Lolita Dulce Maria"
  },
  videos: {
    mobile: "/videos/vertical.mp4",
    desktop: "/videos/horizontal.mp4"
  },
  textoPrincipal: "Acompáñanos a celebrar los quince años de",
  bendicion: "Con la bendición de Dios y el amor de mi familia, me siento muy feliz de llegar a este momento de mi vida. Los invito a compartir conmigo este día tan especial.",
  versiculo: "Porque tú formaste mis entrañas; tú me hiciste en el vientre de mi madre. Salmos 139:13",
  padres: {
    mama: "Lolita Veliz",
    papa: "Menfil Ventura"
  },
  evento: {
    fecha: "Sábado, 21 de Febrero, 2026",
    misa: "Santa Misa, Iglesia Católica de Calzada Mopan - 4:00 PM",
    recepcion: "Salon Social, Calzada Mopan - 6:00 PM",
    lugar: "Salon Social, Calzada Mopan"
  },
  mensajeFinal: "Lo más importante es tu presencia",
  contacto: {
    nombre: "Lolita Veliz",
    telefono: "50240311387",
    mensajeWhatsapp: "Hola, tengo una duda con respecto a los 15 años de Lolita Dulce Maria."
  }
};

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-gold/30 selection:text-gold-light">
      <VideoBackground videos={data.videos} />

      <div className="relative z-10">
        <Hero data={data} delay={0.5} />

        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-16 md:gap-24">
          <EventDetails data={data} delay={0.2} />
          <FinalSection data={data} delay={0.2} />
        </div>

        {/* Decorative elements or spacer */}
        <div className="h-20" />

        {/* Mini Footer - Elegant Minimalist Branding */}
        <footer className="w-full py-16 text-center border-t border-gold/5 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1"
          >
            <a
              href="https://walweb.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-2"
            >
              <span className="text-4xl md:text-5xl font-script text-gold-gradient tracking-widest transition-all duration-700 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] filter drop-shadow(0 0 5px rgba(212,175,55,0.3))">
                Walweb
              </span>
              {/* Animated underline effect */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-gold-light to-transparent transition-all duration-700 group-hover:w-full opacity-60"></div>
            </a>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}

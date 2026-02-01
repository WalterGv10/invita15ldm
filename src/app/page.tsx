import VideoBackground from "@/components/VideoBackground";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import FinalSection from "@/components/FinalSection";

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
    telefono: "502XXXXXXXX",
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

        {/* Mini Footer */}
        <footer className="w-full py-8 text-center bg-black/50 backdrop-blur-sm border-t border-gold/10">
          <p className="text-gold-light/60 text-xs tracking-widest font-serif">
            ¿TE GUSTAN MIS DISEÑOS? VISITA MI WEB
          </p>
          <a
            href="https://walweb.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-bold hover:text-gold-light transition-colors duration-300 text-sm mt-1 inline-block"
          >
            WALWEB.VERCEL.APP
          </a>
        </footer>
      </div>
    </main>
  );
}

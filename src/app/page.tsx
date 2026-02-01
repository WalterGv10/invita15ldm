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
    misa: "Santa Misa - 4:00 PM",
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
    <main className="relative min-h-screen">
      <VideoBackground videos={data.videos} />
      <Hero data={data} delay={0.5} />
      <EventDetails data={data} delay={0.2} />
      <FinalSection data={data} delay={0.2} />
    </main>
  );
}

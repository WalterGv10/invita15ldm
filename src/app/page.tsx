import VideoBackground from "@/components/VideoBackground";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import FinalSection from "@/components/FinalSection";
import Footer from "@/components/Footer";
import { invitationData as data } from "./data";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-gold/30 selection:text-gold-light">
      {/* Background with priority loading for LCP */}
      <VideoBackground videos={data.videos} />

      <div className="relative z-10">
        <Hero data={data} delay={0.5} />

        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-16 md:gap-24">
          <EventDetails data={data} delay={0.2} />
          <FinalSection data={data} delay={0.2} />
        </div>

        {/* Decorative elements or spacer */}
        <div className="h-20" />

        <Footer />
      </div>
    </main>
  );
}

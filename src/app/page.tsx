import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Certifications from "@/components/Certifications";
import Applications from "@/components/Applications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* Action Bar */}
      <section className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Have Any Queries, Feel Free To Call Us!</h2>
          <a href="/contact-v1.html" className="border-2 border-white px-8 py-3 hover:bg-white hover:text-primary transition font-bold uppercase rounded">
            Contact Us
          </a>
        </div>
      </section>

      <AboutSection />

      {/* Counter - Simplified for now */}
      <section className="py-20 bg-fixed bg-cover bg-center relative" style={{ backgroundImage: "url('/images/portfolio-3.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Providing the Best Quality Of The Services !!!</h2>
        </div>
      </section>

      <ServicesSection />
      <Applications />
      <Certifications />
    </main>
  );
}

import type { Metadata } from "next";
import "@/components/reference-clone/reference-clone.css";
import { Header } from "@/components/reference-clone/Header";
import { Hero } from "@/components/reference-clone/Hero";
import { TrustBar } from "@/components/reference-clone/TrustBar";
import { About } from "@/components/reference-clone/About";
import { Services } from "@/components/reference-clone/Services";
import { Process } from "@/components/reference-clone/Process";
import { Experience } from "@/components/reference-clone/Experience";
import { Testimonials } from "@/components/reference-clone/Testimonials";
import { Insights } from "@/components/reference-clone/Insights";
import { Faq } from "@/components/reference-clone/Faq";
import { Footer } from "@/components/reference-clone/Footer";

// TEMPORANEO: questa homepage è una ricostruzione fedele di https://adviest.framer.ai/
// (struttura, testi e immagini del riferimento) usata come base di partenza prima
// della personalizzazione per Dario Tana. Non indicizzare.
export const metadata: Metadata = {
  title: "Prototipo di riferimento (temporaneo)",
  description: "Ricostruzione temporanea di un sito di riferimento, non ancora personalizzata.",
  robots: { index: false, follow: false },
};

export default function ReferenceCloneHomePage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#0D0D0D]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <Experience />
      <Testimonials />
      <Insights />
      <Faq />
      <Footer />
    </div>
  );
}

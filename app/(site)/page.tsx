import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { EngagementsSection } from "@/components/sections/EngagementsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Dario Tana — Consulente e Docente E-commerce",
  description:
    "Consulenza e formazione e-commerce indipendenti per prendere decisioni più consapevoli. Oltre 20 anni di esperienza diretta.",
  alternates: { canonical: "https://dariotana.it" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <EngagementsSection />
      <TestimonialsSection />
      <AudienceSection />
      <FaqSection />
    </>
  );
}

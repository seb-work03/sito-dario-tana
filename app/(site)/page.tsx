import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TrainingMarquee } from "@/components/sections/TrainingMarquee";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Dario Tana — Consulente e Docente E-commerce",
  description:
    "Consulenza e formazione e-commerce per prendere decisioni più consapevoli. Oltre 20 anni di esperienza diretta nel commercio elettronico.",
  alternates: {
    canonical: "https://dariotana.it",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <MethodSection />
      <UseCasesSection />
      <ExperienceSection />
      <TrainingMarquee />
      <TestimonialsSection />
      <InsightsSection />
      <CtaSection />
    </>
  );
}

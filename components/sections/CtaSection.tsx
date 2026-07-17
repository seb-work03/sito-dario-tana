import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-section bg-background-secondary">
      <Container size="md" className="text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-accent-primary/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mx-3" />
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-accent-primary/40" />
        </div>

        <h2 className="font-display text-display-lg text-text-primary mb-6">
          Hai un progetto, un problema o una decisione da prendere?
        </h2>

        <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Raccontami il contesto. Valuteremo insieme se e come posso esserti utile.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contatti" size="lg">
            Parliamone <ArrowRight size={16} />
          </Button>
          <Button href="/consulenza" variant="secondary" size="lg">
            Scopri la consulenza
          </Button>
        </div>

        <p className="mt-8 text-text-muted text-sm">
          Di solito rispondo entro{" "}
          <span className="text-text-secondary">1-2 giorni lavorativi</span>.
        </p>
      </Container>
    </section>
  );
}

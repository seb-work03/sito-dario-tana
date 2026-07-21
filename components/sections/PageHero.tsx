import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-ink-900">
      <Container>
        <FadeIn>
          <SectionLabel className="mb-6 block">{eyebrow}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display text-display-xl text-paper-50 max-w-3xl text-balance leading-[1.05]">
            {title}
          </h1>
        </FadeIn>
        {description && (
          <FadeIn delay={0.2}>
            <p className="text-paper-400 text-base md:text-lg leading-relaxed max-w-xl mt-6">
              {description}
            </p>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}

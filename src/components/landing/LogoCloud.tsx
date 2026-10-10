import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import {
  Briefcase,
  Globe,
  Home,
  Scissors,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Utensils,
} from "@/components/icons";

const COMPANIES = [
  { name: "BrightSmile", Icon: Stethoscope },
  { name: "Osteria", Icon: Utensils },
  { name: "Lumière", Icon: Scissors },
  { name: "Cole Realty", Icon: Home },
  { name: "Northgate", Icon: ShoppingBag },
  { name: "Weber & Lane", Icon: Briefcase },
  { name: "Meridian", Icon: Globe },
  { name: "Vertex", Icon: Sparkles },
];

export function LogoCloud() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal variant="fade">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-faint">
            Trusted by 2,000+ local businesses
          </p>
        </Reveal>
      </Container>

      <Reveal variant="fade" delay={120}>
        <div className="mask-fade-x relative mt-8 flex overflow-hidden">
          <div className="marquee-track animate-marquee flex w-max shrink-0 items-center gap-12 pr-12">
            {[...COMPANIES, ...COMPANIES].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                aria-hidden={index >= COMPANIES.length}
                className="flex items-center gap-2.5 text-faint transition-colors duration-300 hover:text-foreground"
              >
                <company.Icon className="h-6 w-6" />
                <span className="font-display text-xl font-semibold tracking-tight">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

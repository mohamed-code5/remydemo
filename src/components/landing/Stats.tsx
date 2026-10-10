import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const STATS = [
  { to: 3.4, decimals: 1, suffix: "M+", label: "calls handled every month" },
  { to: 0.4, decimals: 1, suffix: "s", label: "average time to answer" },
  { to: 68, decimals: 0, suffix: "%", label: "lower cost per call" },
  { to: 31, decimals: 0, suffix: "", label: "languages supported" },
];

export function Stats() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal variant="fade">
          <div className="glass grid grid-cols-2 gap-8 rounded-3xl px-6 py-10 sm:px-10 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <Reveal
                key={stat.label}
                variant="up"
                delay={index * 90}
                className="flex flex-col items-center text-center"
              >
                <p className="font-display text-3xl font-semibold tracking-tight text-foreground tabular-nums sm:text-4xl">
                  <CountUp
                    to={stat.to}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 max-w-[12rem] text-sm leading-snug text-muted">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

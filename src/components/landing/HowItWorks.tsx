import { Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { PhoneCall, Sparkles, TrendingUp } from "@/components/icons";

const STEPS = [
  {
    Icon: PhoneCall,
    title: "Connect your number",
    body: "Forward your existing line or spin up a new one in minutes. No hardware, no migration project.",
  },
  {
    Icon: Sparkles,
    title: "Train Remy on your business",
    body: "Upload your docs, FAQs, and policies. Remy learns your products, tone, and escalation rules.",
  },
  {
    Icon: TrendingUp,
    title: "Go live and watch it work",
    body: "Every call is answered, logged, and summarized. Tune performance from one dashboard.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <Parallax
        speed={0.24}
        ariaHidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[min(900px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[130px]"
      />
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Live in a day"
            title="From phone number to AI call center in three steps"
            description="No engineering sprint required. Most teams take their first AI-handled call the same day they sign up."
          />
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-6 hidden h-px w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 100}>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-surface-2 text-brand-3">
                      <step.Icon className="h-5 w-5" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 font-display text-xs font-semibold text-[#07070d]">
                        {index + 1}
                      </span>
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

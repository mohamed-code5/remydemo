import { Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
  AudioLines,
  Chart,
  Clock,
  Fingerprint,
  Globe,
  Route,
  ShieldCheck,
} from "@/components/icons";

const BARS = Array.from({ length: 30 }, (_, i) => {
  const value = 0.3 + Math.abs(Math.sin(i * 1.4) * Math.cos(i * 0.6)) * 0.7;
  return Math.round(value * 100) / 100;
});

const SMALL_FEATURES = [
  {
    Icon: Clock,
    title: "Instant answers",
    body: "Picks up in under a second, every time. No hold music, no missed calls, no voicemail.",
  },
  {
    Icon: Route,
    title: "Smart escalation",
    body: "Send the right call to the right human with a live summary and the full transcript.",
  },
  {
    Icon: Chart,
    title: "Real-time analytics",
    body: "Watch resolution, sentiment, and cost per call update the moment a call ends.",
  },
  {
    Icon: Globe,
    title: "30+ languages",
    body: "Serve global customers in their language — no global hiring required.",
  },
];

const TRUST = [
  { Icon: ShieldCheck, label: "SOC 2 Type II" },
  { Icon: Fingerprint, label: "HIPAA-ready" },
  { Icon: Globe, label: "GDPR compliant" },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Built for volume"
            title={
              <>
                Everything a call center needs,{" "}
                <span className="text-gradient">minus the wait</span>
              </>
            }
            description="Remy handles the calls your team doesn't have time for — and gives them the context to be brilliant on the ones that matter."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* wide card */}
          <Reveal className="lg:col-span-2">
            <SpotlightCard className="glass group h-full overflow-hidden rounded-3xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-brand/20 blur-3xl"
              />
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-brand-3 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <AudioLines className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    Voice that sounds genuinely human
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Natural pacing, real interruption handling, and your brand
                    voice. Callers get a conversation, not a phone tree.
                  </p>
                </div>

                <div className="flex h-24 w-full items-center gap-[3px] sm:w-56">
                  {BARS.map((height, index) => (
                    <span
                      key={index}
                      className="animate-wave flex-1 rounded-full bg-gradient-to-t from-brand/70 to-brand-2"
                      style={{
                        height: `${height * 100}%`,
                        animationDelay: `${index * 50}ms`,
                        animationDuration: `${900 + (index % 7) * 120}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* trust card */}
          <Reveal delay={80}>
            <SpotlightCard className="glass flex h-full flex-col justify-between rounded-3xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-8">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-emerald-300">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  Enterprise-grade security
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Encrypted calls, PII redaction, and regional data residency
                  out of the box.
                </p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {TRUST.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-muted"
                  >
                    <item.Icon className="h-3.5 w-3.5 text-emerald-300" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>

          {/* small features */}
          {SMALL_FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70}>
              <SpotlightCard className="glass group h-full rounded-3xl p-6 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.055]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-brand-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-brand-2">
                  <feature.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

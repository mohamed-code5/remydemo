"use client";

import { useState, type ReactNode } from "react";
import { Container, SectionHeader, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Check, Sparkles } from "@/components/icons";
import { ENTERPRISE, PLANS, formatUSD, monthlyPrice, type Plan } from "@/lib/pricing";

const GUARANTEES = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
  "No setup fees",
];

const METERED_PLANS = PLANS.filter((plan) => plan.monthly != null);

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-[min(900px,100vw)] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]"
      />
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Pricing"
            title="Pricing that scales with your front desk"
            description="One AI receptionist, billed by the minute — never by the seat. Start free, invite your whole team, and cancel anytime."
          />
        </Reveal>

        {/* ------------------------------ Billing toggle ----------------------------- */}
        <Reveal delay={60}>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
              <BillingTab active={!annual} onClick={() => setAnnual(false)}>
                Monthly
              </BillingTab>
              <BillingTab active={annual} onClick={() => setAnnual(true)}>
                <span className="inline-flex items-center gap-2">
                  Annual
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      annual
                        ? "bg-[#07070d]/15 text-[#07070d]"
                        : "bg-emerald-400/10 text-emerald-300"
                    }`}
                  >
                    −20%
                  </span>
                </span>
              </BillingTab>
            </div>
            <p className="text-xs text-faint">
              Save 20% with annual billing — same features, two months free.
            </p>
          </div>
        </Reveal>

        {/* ---------------------------------- Plans --------------------------------- */}
        <div className="mt-12 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {METERED_PLANS.map((plan, index) => {
            const price =
              plan.monthly != null ? monthlyPrice(plan.monthly, annual) : null;

            return (
              <Reveal
                key={plan.id}
                delay={index * 80}
                className={plan.featured ? "relative" : ""}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-6 z-20 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand-2 px-3 py-1 text-[11px] font-semibold text-[#07070d]">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </span>
                ) : null}

                {plan.featured ? (
                  <div className="relative isolate h-full overflow-hidden rounded-3xl p-[1.5px]">
                    <span
                      aria-hidden="true"
                      className="animate-spin-slow absolute left-1/2 top-1/2 -z-10 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,#7c6cff_0deg,#34d3ee_90deg,transparent_180deg,transparent_360deg)] opacity-80"
                    />
                    <SpotlightCard
                      color="rgba(124,108,255,0.22)"
                      className="relative flex h-full flex-col rounded-[calc(1.5rem-1.5px)] bg-[#0a0a12] p-6 sm:p-7"
                    >
                      <PlanBody plan={plan} price={price} annual={annual} />
                    </SpotlightCard>
                  </div>
                ) : (
                  <SpotlightCard className="glass flex h-full flex-col rounded-3xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-7">
                    <PlanBody plan={plan} price={price} annual={annual} />
                  </SpotlightCard>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* -------------------------------- Enterprise ------------------------------- */}
        <Reveal delay={60}>
          <SpotlightCard
            color="rgba(52,211,238,0.16)"
            className="glass mt-4 overflow-hidden rounded-3xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_1.35fr_auto] lg:items-center">
              <div>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted">
                  {ENTERPRISE.bestFor}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                  {ENTERPRISE.name}
                </h3>
                <p className="mt-2 text-sm leading-snug text-muted">
                  {ENTERPRISE.tagline}
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="font-display text-3xl font-semibold tracking-tight text-foreground">
                    Custom
                  </span>
                  <span className="pb-1 text-sm text-muted">
                    volume pricing
                  </span>
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {ENTERPRISE.highlights.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-3">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-snug text-muted">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 lg:w-44">
                <Button href="#demo" variant="secondary" className="w-full">
                  {ENTERPRISE.cta}
                </Button>
                <p className="text-xs leading-relaxed text-faint">
                  Volume pricing, security review, and a dedicated success
                  manager.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* -------------------------------- Guarantee -------------------------------- */}
        <Reveal delay={80}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {GUARANTEES.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 text-sm text-muted"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand-3">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center text-xs text-faint">
              Every plan includes 30+ languages, call recordings, and unlimited
              knowledge-base documents.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function BillingTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-gradient-to-r from-brand to-brand-2 text-[#07070d] shadow-[0_8px_24px_-10px_rgba(124,108,255,0.8)]"
          : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function PlanBody({
  plan,
  price,
  annual,
}: {
  plan: Plan;
  price: number | null;
  annual: boolean;
}) {
  return (
    <>
      <h3 className="font-display text-lg font-semibold text-foreground">
        {plan.name}
      </h3>
      <span className="mt-2 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted">
        {plan.bestFor}
      </span>
      <p className="mt-3 min-h-[2.5rem] text-sm leading-snug text-muted">
        {plan.tagline}
      </p>

      <div className="mt-6 flex items-end gap-2">
        {price !== null ? (
          <>
            <span className="font-display text-4xl font-semibold tracking-tight text-foreground">
              {formatUSD(price)}
            </span>
            <span className="pb-1 text-sm text-muted">/ month</span>
          </>
        ) : (
          <span className="font-display text-4xl font-semibold tracking-tight text-foreground">
            Custom
          </span>
        )}
      </div>
      <p className="mt-1 h-4 text-xs text-faint">
        {price !== null && annual ? "billed annually" : "\u00a0"}
      </p>

      <Button
        href="#demo"
        variant={plan.featured ? "primary" : "secondary"}
        className="mt-6 w-full"
      >
        {plan.cta}
      </Button>

      <div className="mt-7 border-t border-white/8 pt-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
          What&apos;s included
        </p>
        <ul className="mt-4 flex flex-col gap-3.5">
          {plan.highlights.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-3">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-sm leading-snug text-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-faint">
        {plan.overage != null
          ? `Then ${formatUSD(plan.overage, 2)} / extra minute. Need more? Add a minute pack.`
          : "Custom volume pricing and a dedicated success manager."}
      </p>
    </>
  );
}

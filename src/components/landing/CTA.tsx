"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Check } from "@/components/icons";

export function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <Container>
        <Reveal variant="scale">
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="bg-grid absolute inset-0 opacity-[0.15]" />
              <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[110px]" />
              <div className="absolute bottom-0 right-1/4 h-52 w-52 translate-y-1/2 rounded-full bg-brand-2/20 blur-[110px]" />
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Setup takes less than a day
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
              Stop losing calls.{" "}
              <span className="text-gradient">Start answering today.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Book a 20-minute demo and watch Remy handle a real call for your
              business.
            </p>

            <form
              onSubmit={async (event) => {
                event.preventDefault();
                if (!email.trim()) return;
                const response = await fetch("/api/demo", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ name: "Website visitor", email }),
                });
                if (response.ok) setSent(true);
              }}
              className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Work email
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSent(false);
                }}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-white/12 bg-black/30 px-5 text-sm text-foreground placeholder:text-faint outline-none transition-colors duration-200 focus:border-brand/60 focus:ring-2 focus:ring-brand/30"
              />
              <button
                type="submit"
                className="group inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 text-sm font-semibold text-[#07070d] transition-all duration-200 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-brand/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" />
                    Request sent
                  </>
                ) : (
                  <>
                    Book a demo
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-xs text-faint" role="status">
              {sent
                ? "Thanks! We'll be in touch within one business day."
                : "Free 14-day trial · No credit card required · Cancel anytime"}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

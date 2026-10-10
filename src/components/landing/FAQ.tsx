"use client";

import { useState } from "react";
import { Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ChevronDown } from "@/components/icons";

const FAQS = [
  {
    q: "How fast can we go live?",
    a: "Most teams take their first AI-handled call the same day they sign up. Forward your number, upload your knowledge base, and Remy is answering — no engineering sprint required.",
  },
  {
    q: "Does the AI actually sound human?",
    a: "Yes. Remy uses natural pacing, handles interruptions, and adapts to your brand's tone. Responses come back in under half a second, so conversations feel fluid rather than robotic.",
  },
  {
    q: "What happens when the AI can't help?",
    a: "Remy escalates to the right human with a live summary, the full transcript, and the caller's context already loaded — so your team never asks a customer to repeat themselves.",
  },
  {
    q: "Can we use our existing phone number?",
    a: "Absolutely. You can forward your current line to Remy or port the number over. Toll-free, local, and international numbers are all supported.",
  },
  {
    q: "Which languages are supported?",
    a: "Remy speaks more than 30 languages and can detect the caller's language automatically, switching mid-conversation if needed.",
  },
  {
    q: "Is our data secure and compliant?",
    a: "Remy is SOC 2 Type II certified, HIPAA-ready, and GDPR compliant. Calls are encrypted in transit and at rest, with PII redaction and regional data residency available.",
  },
  {
    q: "How does per-minute billing work?",
    a: "Every plan includes a monthly pool of AI call minutes. If you go over, extra minutes are billed at your plan's overage rate — or you can add a minute pack. You only pay for connected call time, rounded to the nearest second.",
  },
  {
    q: "Do you charge per seat?",
    a: "No. You pay for call minutes and locations, so you can invite your whole team at no extra cost. Extra locations are $20/month each beyond what your plan includes.",
  },
  {
    q: "Can I change or cancel my plan?",
    a: "Anytime, from your dashboard. Upgrades take effect immediately and downgrades at the next cycle. Annual plans are billed once a year at a 20% discount, and unused minutes roll over for 30 days on monthly plans.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Questions, answered"
              title="Everything you need to know before you call"
              description="Still curious? Our team is one click away."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="glass overflow-hidden rounded-3xl">
              {FAQS.map((item, index) => {
                const isOpen = open === index;
                return (
                  <div
                    key={item.q}
                    className={index !== 0 ? "border-t border-white/8" : ""}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-white/[0.03] sm:px-6"
                      >
                        <span className="text-[0.95rem] font-medium text-foreground">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${index}`}
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

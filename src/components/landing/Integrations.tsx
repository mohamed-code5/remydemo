import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiAirtable,
  SiCalendly,
  SiHubspot,
  SiIntercom,
  SiNotion,
  SiPosthog,
  SiShopify,
  SiSnowflake,
  SiStripe,
  SiZapier,
  SiZendesk,
  SiZoom,
} from "react-icons/si";

import { Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Check, Code } from "@/components/icons";

const PARTNERS: { name: string; Icon: IconType; color: string }[] = [
  { name: "HubSpot", Icon: SiHubspot, color: "#ff7a59" },
  { name: "Zendesk", Icon: SiZendesk, color: "#78a300" },
  { name: "Intercom", Icon: SiIntercom, color: "#1f8ded" },
  { name: "Shopify", Icon: SiShopify, color: "#95bf47" },
  { name: "Stripe", Icon: SiStripe, color: "#635bff" },
  { name: "Notion", Icon: SiNotion, color: "#ffffff" },
  { name: "Snowflake", Icon: SiSnowflake, color: "#29b5e8" },
  { name: "Zapier", Icon: SiZapier, color: "#ff4f00" },
  { name: "Airtable", Icon: SiAirtable, color: "#18bfff" },
  { name: "Zoom", Icon: SiZoom, color: "#0b5cff" },
  { name: "Calendly", Icon: SiCalendly, color: "#006bff" },
  { name: "PostHog", Icon: SiPosthog, color: "#f54e00" },
];

const POINTS = [
  "Sync contacts, tickets, and call logs both ways",
  "Trigger webhooks the moment a call ends",
  "Drop Remy into any stack with a REST API and SDKs",
];

const CODE = `POST /v1/calls  HTTP/1.1
Authorization: Bearer sk_live_•••

{
  "from": "+14155550142",
  "agent": "support-tier-1",
  "on_end": "webhook",
  "language": "auto"
}`;

export function Integrations() {
  return (
    <section id="integrations" className="relative py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <SectionHeader
              align="left"
              eyebrow="Fits your stack"
              title="Works with the tools your team already lives in"
              description="Remy plugs into your CRM, helpdesk, and data stack in minutes — so every call lands where your work already happens."
            />
            <ul className="mt-8 flex flex-col gap-3.5">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="flex flex-col gap-4">
              <div className="glass relative overflow-hidden rounded-3xl p-4">
                <div
                  aria-hidden="true"
                  className="bg-grid pointer-events-none absolute inset-0 opacity-[0.15]"
                />
                <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {PARTNERS.map((partner) => (
                    <span
                      key={partner.name}
                      style={{ "--brand": partner.color } as CSSProperties}
                      className="group flex cursor-default items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3.5 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                    >
                      <partner.Icon className="h-5 w-5 shrink-0 text-muted transition-colors duration-300 group-hover:text-[var(--brand)]" />
                      <span className="truncate text-[13px] font-medium text-muted transition-colors duration-300 group-hover:text-foreground">
                        {partner.name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/8 bg-[#08080d]">
                <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                  <Code className="h-4 w-4 text-brand-3" />
                  <span className="font-mono text-xs text-faint">
                    create-call.sh
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-muted">
                  <code>{CODE}</code>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

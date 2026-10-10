"use client";

import { useState } from "react";
import { Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import {
  Blocks,
  Bot,
  Chart,
  Gauge,
  PhoneCall,
  Users,
} from "@/components/icons";

type Tone = "green" | "amber" | "brand";

type Row = { name: string; tag: string; status: string; time: string; tone: Tone };

type Tab = {
  id: string;
  label: string;
  blurb: string;
  rows: Row[];
};

const TABS: Tab[] = [
  {
    id: "inbound",
    label: "Inbound",
    blurb: "Every call answered and routed before the second ring.",
    rows: [
      { name: "BrightSmile Dental", tag: "Appointment", status: "Booked by AI", time: "1m 48s", tone: "green" },
      { name: "Osteria Bianchi", tag: "Reservation", status: "Resolved by AI", time: "0m 52s", tone: "green" },
      { name: "Cole Realty", tag: "Listing inquiry", status: "Escalated to Nathan", time: "4m 12s", tone: "amber" },
      { name: "Northgate Retail", tag: "Order status", status: "Resolved by AI", time: "2m 06s", tone: "green" },
      { name: "Lumière Salon", tag: "Rebooking", status: "In progress", time: "0m 31s", tone: "brand" },
    ],
  },
  {
    id: "outbound",
    label: "Outbound",
    blurb: "Run outreach campaigns that sound like your best rep.",
    rows: [
      { name: "Weber & Lane", tag: "Consult booking", status: "Meeting booked", time: "3m 02s", tone: "green" },
      { name: "BrightSmile Dental", tag: "Recall reminder", status: "Appointment booked", time: "2m 27s", tone: "green" },
      { name: "Osteria Bianchi", tag: "Win-back", status: "Callback scheduled", time: "1m 15s", tone: "amber" },
      { name: "Cole Realty", tag: "Lead follow-up", status: "Qualified", time: "2m 44s", tone: "green" },
      { name: "Northgate Retail", tag: "Promo outreach", status: "Dialing", time: "0m 08s", tone: "brand" },
    ],
  },
  {
    id: "qa",
    label: "QA & Coaching",
    blurb: "Score every conversation and coach your team with evidence.",
    rows: [
      { name: "Call #4821", tag: "Refund policy", status: "Score 94 — excellent", time: "6m 20s", tone: "green" },
      { name: "Call #4820", tag: "Onboarding", status: "Score 88 — good", time: "5m 03s", tone: "green" },
      { name: "Call #4819", tag: "Complaint", status: "Flagged for review", time: "7m 41s", tone: "amber" },
      { name: "Call #4818", tag: "Pricing", status: "Score 91 — excellent", time: "4m 55s", tone: "green" },
      { name: "Call #4817", tag: "Technical", status: "Analyzing…", time: "—", tone: "brand" },
    ],
  },
];

const NAV = [
  { label: "Dashboard", Icon: Gauge },
  { label: "Calls", Icon: PhoneCall },
  { label: "Agents", Icon: Bot },
  { label: "Analytics", Icon: Chart },
  { label: "Team", Icon: Users },
  { label: "Integrations", Icon: Blocks },
];

const toneClasses: Record<Tone, string> = {
  green: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  amber: "bg-amber-400/10 text-amber-300 border-amber-400/20",
  brand: "bg-brand/15 text-brand-3 border-brand/25",
};

const ROW_STATS: Record<string, { label: string; value: string; delta: string }[]> = {
  inbound: [
    { label: "Calls today", value: "1,284", delta: "+12%" },
    { label: "Answered by AI", value: "96%", delta: "+3%" },
    { label: "Avg. pickup", value: "0.4s", delta: "−18%" },
  ],
  outbound: [
    { label: "Dialed today", value: "742", delta: "+9%" },
    { label: "Connect rate", value: "41%", delta: "+6%" },
    { label: "Meetings booked", value: "118", delta: "+21%" },
  ],
  qa: [
    { label: "Calls reviewed", value: "5,910", delta: "+14%" },
    { label: "Avg. QA score", value: "91", delta: "+4" },
    { label: "Flagged", value: "23", delta: "−31%" },
  ],
};

export function Showcase() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((item) => item.id === active) ?? TABS[0];
  const stats = ROW_STATS[tab.id];

  return (
    <section id="product" className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="One command center"
            title="See every call, the moment it happens"
            description="A single workspace for live calls, AI agents, analytics, and your team — with nothing left in a black box."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex justify-center">
            <div className="glass inline-flex rounded-full p-1">
              {TABS.map((item) => {
                const isActive = item.id === tab.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(item.id)}
                    aria-pressed={isActive}
                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 sm:px-5 ${
                      isActive
                        ? "bg-gradient-to-r from-brand to-brand-2 text-[#07070d]"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} variant="scale">
          <div className="glass mt-8 rounded-[1.75rem] p-2 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)] sm:p-3">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-[#08080d]">
              {/* window bar */}
              <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-white/12" />
                  <span className="h-3 w-3 rounded-full bg-white/12" />
                  <span className="h-3 w-3 rounded-full bg-white/12" />
                </div>
                <div className="mx-auto hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-1.5 text-xs text-faint sm:flex">
                  app.remy.ai/workspace
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <div className="flex">
                {/* sidebar */}
                <aside className="hidden w-56 shrink-0 flex-col border-r border-white/8 p-4 md:flex">
                  <div className="flex flex-col gap-1">
                    {NAV.map((item, index) => (
                      <span
                        key={item.label}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${
                          index === 1
                            ? "bg-white/[0.06] text-foreground"
                            : "text-muted"
                        }`}
                      >
                        <item.Icon className="h-4 w-4" />
                        {item.label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                    <p className="text-xs font-medium text-foreground">
                      AI coverage
                    </p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-brand to-brand-2" />
                    </div>
                    <p className="mt-2 text-[11px] text-faint">
                      92% of calls handled
                    </p>
                  </div>
                </aside>

                {/* main */}
                <main className="min-w-0 flex-1 p-4 sm:p-6">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {tab.label}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{tab.blurb}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-muted">
                      Last 24 hours
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5"
                      >
                        <p className="truncate text-[11px] text-faint">
                          {stat.label}
                        </p>
                        <p className="mt-1.5 font-display text-lg font-semibold text-foreground sm:text-xl">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-[11px] font-medium text-emerald-300">
                          {stat.delta}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-white/8">
                    {tab.rows.map((row, index) => (
                      <div
                        key={row.name}
                        className={`flex items-center gap-3 px-3.5 py-3 ${
                          index !== 0 ? "border-t border-white/8" : ""
                        } ${index % 2 === 1 ? "bg-white/[0.015]" : ""}`}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand/30 to-brand-2/20 text-[10px] font-semibold text-foreground">
                          {row.name.slice(0, 2).toUpperCase()}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-foreground">
                            {row.name}
                          </p>
                          <p className="truncate text-[11px] text-faint">
                            {row.tag}
                          </p>
                        </div>
                        <span
                          className={`hidden shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium sm:inline-flex ${toneClasses[row.tone]}`}
                        >
                          {row.status}
                        </span>
                        <span className="w-16 shrink-0 text-right font-mono text-xs tabular-nums text-faint">
                          {row.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

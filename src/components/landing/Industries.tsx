import { Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
  Briefcase,
  Home,
  Scissors,
  ShoppingBag,
  Stethoscope,
  Utensils,
} from "@/components/icons";

const INDUSTRIES = [
  {
    Icon: Stethoscope,
    name: "Clinics & Healthcare",
    body: "Answer every patient call, book appointments, and handle after-hours questions — without a front-desk bottleneck.",
    tags: ["Appointments", "Insurance", "After-hours"],
  },
  {
    Icon: Utensils,
    name: "Restaurants",
    body: "Take reservations and answer the same five questions every time — even while your team is slammed at the dinner rush.",
    tags: ["Reservations", "Menu & hours", "Large parties"],
  },
  {
    Icon: Scissors,
    name: "Salons & Spas",
    body: "Fill your calendar with bookings, reschedules, and reminders, and refill cancellations automatically — hands-free.",
    tags: ["Bookings", "Reschedules", "Waitlist"],
  },
  {
    Icon: Home,
    name: "Real Estate",
    body: "Reply to every listing inquiry in seconds, qualify the lead, and put a showing on the calendar before anyone else.",
    tags: ["Listing leads", "Qualifying", "Showings"],
  },
  {
    Icon: ShoppingBag,
    name: "Retail",
    body: "Handle order status, stock checks, and store hours across every location — on the first ring, at any hour.",
    tags: ["Order status", "Stock checks", "Store hours"],
  },
  {
    Icon: Briefcase,
    name: "Professional Services",
    body: "Capture new-client intake, screen calls, and book consultations automatically, so billable hours stay billable.",
    tags: ["New-client intake", "Screening", "Consultations"],
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-[min(900px,100vw)] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]"
      />
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Built for your business"
            title="One AI receptionist, tuned for your industry"
            description="Remy answers like your best front-desk hire — with the scripts, systems, and language each trade actually needs."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 70}>
              <SpotlightCard className="glass group h-full rounded-3xl p-6 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.055]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-brand-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-brand-2">
                  <industry.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {industry.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {industry.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {industry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

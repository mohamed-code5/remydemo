import { Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Quote, Star } from "@/components/icons";

const TESTIMONIALS = [
  {
    quote:
      "Our front desk missed one in five calls at lunch. Remy answers all of them and books the appointment before we can even reach the phone.",
    name: "Dr. Elena Ruiz",
    role: "Practice Manager, BrightSmile Dental",
    initials: "ER",
    from: "from-violet-400",
    to: "to-indigo-500",
  },
  {
    quote:
      "During Friday dinner service we simply can't get to the phone. Remy takes reservations and answers the same questions, every single time.",
    name: "Marco Bianchi",
    role: "Owner, Osteria Bianchi",
    initials: "MB",
    from: "from-amber-300",
    to: "to-orange-500",
  },
  {
    quote:
      "It books, reschedules, and refills our cancellations automatically. Our chairs stay full without hiring another receptionist.",
    name: "Aaliyah Brooks",
    role: "Owner, Lumière Salon & Spa",
    initials: "AB",
    from: "from-fuchsia-400",
    to: "to-purple-500",
  },
  {
    quote:
      "Every listing inquiry gets an instant reply and a booked showing. We stopped losing leads to whoever answered first.",
    name: "Nathan Cole",
    role: "Broker, Cole & Co. Realty",
    initials: "NC",
    from: "from-cyan-300",
    to: "to-sky-500",
  },
  {
    quote:
      "“Where's my order?” used to flood our lines. Now Remy handles it across all four stores, day and night.",
    name: "Priya Nair",
    role: "Operations Lead, Northgate Retail",
    initials: "PN",
    from: "from-emerald-300",
    to: "to-teal-500",
  },
  {
    quote:
      "New-client intake, call screening, consult booking — Remy handles it all, so our billable hours stay billable.",
    name: "Thomas Weber",
    role: "Partner, Weber & Lane",
    initials: "TW",
    from: "from-rose-300",
    to: "to-pink-500",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Loved across industries"
            title="Teams stop drowning in calls — and start loving them again"
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) * 90}>
              <SpotlightCard
                color="rgba(52,211,238,0.14)"
                className="glass h-full rounded-3xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-7"
              >
                <figure className="flex h-full flex-col">
                  <Quote className="h-7 w-7 text-brand-3/70" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                    {item.quote}
                  </blockquote>
                  <div className="mt-5 flex text-amber-300">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="h-4 w-4" />
                    ))}
                  </div>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-white/8 pt-5">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${item.from} ${item.to} text-xs font-semibold text-[#07070d]`}
                    >
                      {item.initials}
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

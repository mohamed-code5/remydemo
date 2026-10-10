import Image from "next/image";
import { Container, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";

type Member = {
  name: string;
  role: string;
  team: string;
  focus: string;
  initials: string;
  from: string;
  to: string;
  image?: string;
};

const MEMBERS: Member[] = [
  {
    name: "Moha",
    role: "Co-founder & CEO",
    team: "Leadership",
    focus: "Ran support floors for a decade before starting Remy.",
    initials: "MC",
    from: "from-violet-400",
    to: "to-indigo-500",
    image: "/team/moha.jpg",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-[min(900px,100vw)] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]"
      />
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="The team behind Remy"
            title="Real people building a better front desk"
            description="Engineers, AI researchers, designers, and operators who've spent their careers on both sides of the phone."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((member, index) => (
            <Reveal key={member.name} delay={(index % 4) * 70}>
              <SpotlightCard className="glass flex h-full flex-col items-center rounded-3xl p-6 text-center transition-colors duration-300 hover:border-white/15">
                <span
                  className={`relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${member.from} ${member.to} font-display text-2xl font-semibold text-[#07070d]`}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Remy`}
                      width={320}
                      height={320}
                      sizes="96px"
                      className="h-full w-full object-cover object-[50%_25%]"
                    />
                  ) : (
                    member.initials
                  )}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/25"
                  />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-xs text-muted">{member.role}</p>
                <span className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-muted">
                  {member.team}
                </span>
                <p className="mt-4 text-xs leading-relaxed text-faint">
                  {member.focus}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-10 text-center text-sm text-muted">
            Remote-first, across six time zones.{" "}
            <a
              href="#demo"
              className="font-medium text-brand-3 underline-offset-4 transition-colors duration-200 hover:text-brand-2 hover:underline"
            >
              We&apos;re hiring →
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

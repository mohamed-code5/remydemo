import Image from "next/image";
import { Container, Pill } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { IncomingCall } from "./IncomingCall";
import { Parallax } from "@/components/Parallax";
import {
  ArrowRight,
  Play,
  Star,
  ShieldCheck,
  Bolt,
} from "@/components/icons";

const HERO_CUTOUT = "/hero/pics-cutout.png";

const AVATARS = [
  { src: "https://i.pravatar.cc/96?img=12", initials: "JM" },
  { src: "https://i.pravatar.cc/96?img=32", initials: "SL" },
  { src: "https://i.pravatar.cc/96?img=45", initials: "RK" },
  { src: "https://i.pravatar.cc/96?img=15", initials: "AD" },
  { src: "https://i.pravatar.cc/96?img=5", initials: "MP" },
];

const CTA_CLASS =
  "h-12 rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 text-[0.95rem] font-semibold text-[#07070d] shadow-[0_10px_40px_-12px_rgba(124,108,255,0.7)] hover:brightness-110";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* hero ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Parallax speed={0.12} className="absolute inset-0">
          <div className="absolute left-1/2 top-[-10rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,108,255,0.3),transparent)] blur-2xl" />
          <div className="absolute right-[-8rem] top-28 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(46,212,232,0.2),transparent)] blur-3xl" />
          <div className="absolute left-[-10rem] top-52 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(124,108,255,0.16),transparent)] blur-3xl" />
        </Parallax>
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <a
              href="#product"
              className="animate-fade-up rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand/70"
            >
              <Pill className="transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.07]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                New — sub-500ms AI voice agents
                <ArrowRight className="h-3.5 w-3.5" />
              </Pill>
            </a>

            <h1
              className="animate-fade-up mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-foreground sm:text-5xl lg:text-[4.25rem]"
              style={{ animationDelay: "80ms" }}
            >
              The AI call center that{" "}
              <span className="text-gradient [filter:drop-shadow(0_0_32px_rgba(124,108,255,0.35))]">
                never misses a call
              </span>
              .
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              Remy&apos;s human-sounding voice agents pick up in under a
              second, resolve what they can, and hand off to your team with
              full context — 24/7, in 30+ languages.
            </p>

            {/* review strip */}
            <div
              className="animate-fade-up mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 lg:justify-start"
              style={{ animationDelay: "220ms" }}
            >
              <AvatarGroup>
                {AVATARS.map((avatar) => (
                  <Avatar key={avatar.initials} size="lg">
                    <AvatarImage src={avatar.src} alt="" />
                    <AvatarFallback>{avatar.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 text-amber-300" />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-foreground">
                    4.9
                  </span>
                </div>
                <p className="text-sm text-muted">
                  Loved by 2,000+ local businesses
                </p>
              </div>
            </div>

            <div
              className="animate-fade-up mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                size="lg"
                className={CTA_CLASS}
                render={<a href="#demo" />}
                nativeButton={false}
              >
                Start free
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass h-12 rounded-full px-6 text-[0.95rem] font-medium text-foreground hover:bg-white/[0.08] hover:border-white/15"
                render={<a href="#product" />}
                nativeButton={false}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Play className="h-2.5 w-2.5" />
                </span>
                Watch 2-min demo
              </Button>
            </div>

            <p
              className="animate-fade-up mt-4 text-sm text-muted"
              style={{ animationDelay: "330ms" }}
            >
              No credit card required · Set up in minutes
            </p>

            <div
              className="animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted lg:justify-start"
              style={{ animationDelay: "360ms" }}
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-3" />
                <span>
                  <span className="font-semibold text-foreground">SOC 2</span>{" "}
                  Type II
                </span>
              </span>
              <span className="hidden h-5 w-px bg-white/10 sm:block" />
              <span>30+ languages</span>
              <span className="hidden h-5 w-px bg-white/10 sm:block" />
              <span>24/7 uptime</span>
            </div>
          </div>

          {/* media — cutout figure blended into the background + animated incoming call */}
          <div
            className="animate-fade-up relative mx-auto w-full max-w-[21rem] sm:max-w-md lg:max-w-[26rem]"
            style={{ animationDelay: "300ms" }}
          >
            {/* ambient glow behind the figure */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="absolute left-1/2 top-[42%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,108,255,0.5),transparent)] blur-2xl" />
              <div className="absolute left-1/2 top-[70%] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(46,212,232,0.38),transparent)] blur-2xl" />
            </div>

            {/* the figure */}
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={HERO_CUTOUT}
                alt="Remy AI voice agent answering a live customer call"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 26rem"
                className="object-contain object-bottom drop-shadow-[0_45px_70px_rgba(5,5,12,0.75)] [filter:contrast(1.04)_saturate(1.06)] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_9%,#000_80%,transparent_100%)]"
              />
              {/* floor light */}
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-1/2 h-10 w-2/3 -translate-x-1/2 rounded-[100%] bg-brand/40 blur-2xl"
              />
            </div>

            {/* floating chip — response time */}
            <div className="animate-float absolute left-0 top-8 z-20 hidden sm:block">
              <div className="glass flex items-center gap-3 rounded-2xl px-3.5 py-3 shadow-2xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/20 text-brand-3">
                  <Bolt className="h-4.5 w-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">
                    Sub-500ms
                  </p>
                  <p className="text-[11px] text-muted">response time</p>
                </div>
              </div>
            </div>

            {/* floating chip — live activity */}
            <div
              className="animate-float absolute right-0 top-24 z-20 hidden sm:block"
              style={{ animationDelay: "1.4s" }}
            >
              <div className="glass flex items-center gap-3 rounded-2xl px-3.5 py-3 shadow-2xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">
                    Live now
                  </p>
                  <p className="text-[11px] text-muted">answering calls</p>
                </div>
              </div>
            </div>

            {/* animated incoming call */}
            <div className="absolute inset-x-0 bottom-6 z-20 mx-auto w-[min(20rem,92%)]">
              <IncomingCall />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

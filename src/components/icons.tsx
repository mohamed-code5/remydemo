import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Equalizer bars — centered on y=24 so they scale from the middle. */
const LOGO_BARS: { x: number; h: number; delay: string }[] = [
  { x: 11.0, h: 15, delay: "0s" },
  { x: 16.6, h: 25, delay: "0.15s" },
  { x: 22.2, h: 31, delay: "0.3s" },
  { x: 27.8, h: 23, delay: "0.45s" },
  { x: 33.4, h: 17, delay: "0.6s" },
];

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`logo-mark ${className ?? ""}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="remy-logo-grad"
          x1="8"
          y1="4"
          x2="40"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#a8a0ff" />
          <stop offset="0.45" stopColor="#7c6cff" />
          <stop offset="1" stopColor="#2ed4e8" />
        </linearGradient>
        <radialGradient
          id="remy-logo-shine"
          cx="0.5"
          cy="0.12"
          r="0.8"
          gradientUnits="objectBoundingBox"
        >
          <stop stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="remy-logo-bar" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#dff7ff" />
        </linearGradient>
      </defs>

      {/* gradient tile */}
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="url(#remy-logo-grad)" />
      {/* top glass shine */}
      <rect x="1.5" y="1.5" width="45" height="26" rx="13" fill="url(#remy-logo-shine)" />
      {/* fine inner ring */}
      <rect
        x="3.75"
        y="3.75"
        width="40.5"
        height="40.5"
        rx="11.25"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="1"
      />
      {/* animated equalizer */}
      <g fill="url(#remy-logo-bar)">
        {LOGO_BARS.map((bar) => (
          <rect
            key={bar.x}
            x={bar.x}
            y={24 - bar.h / 2}
            width={3.6}
            height={bar.h}
            rx={1.8}
            className="logo-bar"
            style={{ animationDelay: bar.delay }}
          />
        ))}
      </g>
    </svg>
  );
}

export function Logo({
  className = "",
  markClass = "h-8 w-8",
  labelClass = "",
}: {
  className?: string;
  markClass?: string;
  labelClass?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClass} />
      <span
        className={`logo-wordmark font-display text-lg font-semibold tracking-tight ${labelClass}`}
      >
        Remy
      </span>
    </span>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </Svg>
  );
}

export function Check(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </Svg>
  );
}

export function Close(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Svg>
  );
}

export function Play(props: IconProps) {
  return (
    <Svg {...props} fill="currentColor" stroke="none">
      <path d="M7 4.5v15a1 1 0 0 0 1.54.84l11.5-7.5a1 1 0 0 0 0-1.68L8.54 3.66A1 1 0 0 0 7 4.5Z" />
    </Svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </Svg>
  );
}

export function PhoneCall(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 2a9 9 0 0 1 9 9" />
      <path d="M13 6a5 5 0 0 1 5 5" />
      <path d="M20.5 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 20.5 16.92Z" />
    </Svg>
  );
}

export function AudioLines(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2 12h1.5" />
      <path d="M6 8v8" />
      <path d="M10 4v16" />
      <path d="M14 7v10" />
      <path d="M18 5v14" />
      <path d="M22 12h-1.5" />
    </Svg>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3l1.6 4.6L18 9.2l-4.4 1.6L12 15.4l-1.6-4.6L6 9.2l4.4-1.6L12 3Z" />
      <path d="M18.5 14.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
      <path d="M5 15l.6 1.7L7.3 17.3l-1.7.6L5 19.6l-.6-1.7L2.7 17.3l1.7-.6L5 15Z" />
    </Svg>
  );
}

export function Bot(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 6V3" />
      <rect x="4" y="6" width="16" height="12" rx="3" />
      <path d="M9 11h.01" />
      <path d="M15 11h.01" />
      <path d="M9.5 15a3 3 0 0 0 5 0" />
      <path d="M1.5 12v2" />
      <path d="M22.5 12v2" />
    </Svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  );
}

export function Bolt(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </Svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function Chart(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 16v-4" />
      <path d="M12 16V8" />
      <path d="M17 16v-6" />
    </Svg>
  );
}

export function Blocks(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </Svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
    </Svg>
  );
}

export function Lock(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </Svg>
  );
}

export function Headphones(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M20 14.5V16a2 2 0 0 1-2 2h-.5" />
      <path d="M4 14.5V16a2 2 0 0 0 2 2h.5" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    </Svg>
  );
}

export function Route(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.2 17.3A7 7 0 0 0 15 8" />
      <path d="M15.8 6.7A7 7 0 0 1 9 16" />
    </Svg>
  );
}

export function Users(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8" />
      <path d="M17.5 14.2A6.5 6.5 0 0 1 21.5 20" />
    </Svg>
  );
}

export function TrendingUp(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </Svg>
  );
}

export function Star(props: IconProps) {
  return (
    <Svg {...props} fill="currentColor" stroke="none">
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.2 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
    </Svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <Svg {...props} fill="currentColor" stroke="none">
      <path d="M9.5 5C6.5 6.5 4.5 9.5 4.5 13v6h7v-7H8c0-2 .7-3.6 2.6-4.7L9.5 5Zm10 0c-3 1.5-5 4.5-5 8v6h7v-7h-3.5c0-2 .7-3.6 2.6-4.7L19.5 5Z" />
    </Svg>
  );
}

export function Mic(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0" />
      <path d="M12 18v3.5" />
      <path d="M8.5 21.5h7" />
    </Svg>
  );
}

export function Waveform(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 12h1" />
      <path d="M7 7v10" />
      <path d="M11 3v18" />
      <path d="M15 7v10" />
      <path d="M19 10v4" />
      <path d="M21 12h.01" />
    </Svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </Svg>
  );
}

export function MessageSquare(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    </Svg>
  );
}

export function Layers(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </Svg>
  );
}

export function Pulse(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 12h4l2.5-7 4 14 2.5-7h5" />
    </Svg>
  );
}

export function Code(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9 8-5 4 5 4" />
      <path d="m15 8 5 4-5 4" />
    </Svg>
  );
}

export function Database(props: IconProps) {
  return (
    <Svg {...props}>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </Svg>
  );
}

export function Slack(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M9 15.5v2" />
      <path d="M8 9h3" />
      <path d="M15 8.5v-2" />
      <path d="M16 15h-3" />
    </Svg>
  );
}

export function Gauge(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 14 16 9" />
      <path d="M4.5 19a9 9 0 1 1 15 0" />
      <circle cx="12" cy="14" r="1.4" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function Fingerprint(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3a9 9 0 0 0-9 9c0 1.5.3 2.8.7 4" />
      <path d="M12 7a5 5 0 0 0-5 5v4" />
      <path d="M12 11a1 1 0 0 0-1 1v6" />
      <path d="M14.5 21a11 11 0 0 0 1.5-7" />
      <path d="M17 19a15 15 0 0 0 1-6 6 6 0 0 0-3-5" />
      <path d="M9 21a17 17 0 0 1-1-6v-3" />
    </Svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Industry icons                                                            */
/* -------------------------------------------------------------------------- */

export function Stethoscope(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 3H3.2A1.2 1.2 0 0 0 2 4.2v4.3a5.5 5.5 0 0 0 11 0V4.2A1.2 1.2 0 0 0 11.8 3H10.5" />
      <path d="M7.5 14v1.5a6 6 0 0 0 12 0V11" />
      <circle cx="20" cy="8.5" r="2.5" />
    </Svg>
  );
}

export function Utensils(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </Svg>
  );
}

export function Scissors(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88" />
      <path d="M14.47 14.48 20 20" />
      <path d="M8.12 8.12 12 12" />
    </Svg>
  );
}

export function Home(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 9.5 12 3l9 6.5" />
      <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
      <path d="M9.5 21v-6h5v6" />
    </Svg>
  );
}

export function ShoppingBag(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5.5 8 4 8a1 1 0 0 0-1 1.1l1 10A2 2 0 0 0 6 21h12a2 2 0 0 0 2-1.9l1-10A1 1 0 0 0 20 8h-1.5" />
      <path d="M8.5 8V6a3.5 3.5 0 0 1 7 0v2" />
    </Svg>
  );
}

export function Briefcase(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2" y="6.5" width="20" height="14" rx="2.5" />
      <path d="M16 20.5V4.5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Svg>
  );
}

import { Container } from "@/components/ui";
import { ArrowUpRight, Logo } from "@/components/icons";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Industries", href: "#industries" },
      { label: "Integrations", href: "#integrations" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#team" },
      { label: "Careers", href: "#team" },
      { label: "Customers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#demo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Status", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "DPA", href: "#" },
      { label: "Cookie settings", href: "#" },
    ],
  },
];

function SocialIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "X",
    path: "M17.53 3H21l-7.19 8.21L22.5 21h-6.6l-5.17-6.35L5.5 21H2l7.6-8.68L1.5 3h6.77l4.68 5.8L17.53 3Zm-1.16 16h1.83L7.72 4.9H5.76L16.37 19Z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21 8.65 22 10.6 22 13.8V21h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V21h-4V9Z",
  },
  {
    label: "GitHub",
    path: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
  },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/8">
      {/* gradient top rule */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
      />
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[min(1100px,100vw)] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]"
      />

      <Container className="relative pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
          <div className="max-w-sm">
            <a
              href="#top"
              className="inline-flex items-center"
              aria-label="Remy home"
            >
              <Logo />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The AI call center that answers every call — human-sounding voice
              agents for clinics, restaurants, salons, and more.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-foreground"
                >
                  <SocialIcon path={social.path} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
                  {column.title}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-muted transition-colors duration-200 hover:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Remy Labs, Inc. All rights reserved.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </span>
        </div>
      </Container>

      {/* watermark wordmark */}
      <div aria-hidden="true" className="pointer-events-none relative select-none">
        <p className="bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text pb-2 text-center font-display text-[clamp(5rem,16vw,15rem)] font-bold leading-none tracking-tight text-transparent">
          Remy
        </p>
      </div>
    </footer>
  );
}

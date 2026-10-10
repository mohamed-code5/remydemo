"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Logo,
  Menu,
  ArrowRight,
  PhoneCall,
  Chart,
  Blocks,
  ShieldCheck,
} from "@/components/icons";

type NavItem = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

const PRODUCT_ITEMS: NavItem[] = [
  {
    title: "Voice agents",
    description: "Human-sounding AI that answers in seconds",
    href: "#product",
    icon: <PhoneCall className="size-5" />,
  },
  {
    title: "Conversation analytics",
    description: "Every call, outcome and sentiment in one place",
    href: "#features",
    icon: <Chart className="size-5" />,
  },
  {
    title: "Integrations",
    description: "Connect your CRM, helpdesk and phone stack",
    href: "#integrations",
    icon: <Blocks className="size-5" />,
  },
  {
    title: "Security",
    description: "SOC 2 Type II, encrypted end to end",
    href: "#faq",
    icon: <ShieldCheck className="size-5" />,
  },
];

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const CTA_CLASS =
  "h-10 rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 text-sm font-semibold text-[#07070d] shadow-[0_10px_40px_-12px_rgba(124,108,255,0.7)] hover:brightness-110";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  // Glass state, hide-on-scroll-down / reveal-on-scroll-up, and scroll progress.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > lastY && y > 240 && !open);
      lastY = y;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-3 transition-transform duration-300 ease-out sm:pt-4 ${
        hidden && !open ? "-translate-y-[130%]" : "translate-y-0"
      }`}
    >
      <Container className="relative">
        <nav
          aria-label="Primary"
          className={`relative flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4 ${
            scrolled || open
              ? "glass shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
              : "border border-transparent"
          }`}
        >
          {/* scroll progress — a gradient line that fills as you read */}
          <span
            ref={progressRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 rounded-full"
            style={{
              backgroundImage: "linear-gradient(90deg, #a8a0ff, #7c6cff, #2ed4e8)",
            }}
          />

          <a
            href="#top"
            className="flex items-center rounded-lg px-1 outline-none focus-visible:ring-2 focus-visible:ring-brand/70"
            aria-label="Remy home"
          >
            <Logo />
          </a>

          {/* desktop navigation */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="rounded-full px-3.5 text-sm font-medium text-muted data-popup-open:text-foreground">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[34rem] grid-cols-2 gap-1 p-1">
                      {PRODUCT_ITEMS.map((item) => (
                        <NavigationMenuLink
                          key={item.title}
                          render={<a href={item.href} />}
                          className="flex-row items-start gap-3 rounded-xl p-3"
                        >
                          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand-3">
                            {item.icon}
                          </span>
                          <span className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-foreground">
                              {item.title}
                            </span>
                            <span className="text-xs leading-snug text-muted">
                              {item.description}
                            </span>
                          </span>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {LINKS.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      href={link.href}
                      className="rounded-full px-3.5 py-2 text-sm font-medium text-muted hover:bg-white/[0.05] hover:text-foreground"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#"
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              Sign in
            </a>
            <span aria-hidden="true" className="h-5 w-px bg-white/10" />
            <Button
              size="lg"
              className={CTA_CLASS}
              render={<a href="/demo" />}
              nativeButton={false}
            >
              Book a demo
              <ArrowRight className="size-4" />
            </Button>
          </div>

          {/* mobile menu */}
          <div className="flex items-center lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground hover:bg-white/5"
                    aria-label="Open menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88%] max-w-sm gap-0 border-white/10 bg-surface"
              >
                <SheetHeader className="border-b border-white/10">
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 overflow-y-auto px-4 py-5">
                  <Accordion>
                    <AccordionItem value="product" className="border-b-0">
                      <AccordionTrigger className="py-2 text-base font-semibold text-foreground hover:no-underline">
                        Product
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-1">
                          {PRODUCT_ITEMS.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.06]"
                            >
                              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand-3">
                                {item.icon}
                              </span>
                              <span className="flex flex-col gap-0.5">
                                <span className="text-sm font-semibold text-foreground">
                                  {item.title}
                                </span>
                                <span className="text-xs leading-snug text-muted">
                                  {item.description}
                                </span>
                              </span>
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <nav className="flex flex-col gap-1">
                    {LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                    <Button
                      variant="outline"
                      className="h-11 rounded-full"
                      render={<a href="#" />}
                      nativeButton={false}
                      onClick={() => setOpen(false)}
                    >
                      Sign in
                    </Button>
                    <Button
                      className={`${CTA_CLASS} w-full justify-center`}
                      render={<a href="/demo" />}
                      nativeButton={false}
                      onClick={() => setOpen(false)}
                    >
                      Book a demo
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}

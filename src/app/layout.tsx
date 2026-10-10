import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://remy.ai"),
  title: {
    default: "Remy — The AI call center that answers every call",
    template: "%s · Remy",
  },
  description:
    "Remy is the AI call center for modern teams. Human-sounding voice agents answer, qualify, and resolve calls 24/7 — then hand off to your people with full context.",
  keywords: [
    "AI call center",
    "AI voice agents",
    "voice AI",
    "contact center",
    "customer support automation",
    "inbound calls",
    "Remy",
  ],
  authors: [{ name: "Remy" }],
  openGraph: {
    title: "Remy — The AI call center that answers every call",
    description:
      "Human-sounding AI voice agents that answer, qualify, and resolve calls 24/7.",
    type: "website",
    siteName: "Remy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remy — The AI call center that answers every call",
    description:
      "Human-sounding AI voice agents that answer, qualify, and resolve calls 24/7.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", spaceGrotesk.variable, dmSans.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

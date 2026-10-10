import { Navbar } from "@/components/landing/Navbar";
import { Background } from "@/components/landing/Background";
import { DemoForm } from "@/components/demo/DemoForm";

export const metadata = {
  title: "Book a demo",
  description: "See how Remy answers and resolves calls for your business.",
};

export default function DemoPage() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-32">
        <div className="grid w-full gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <section>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-3">Talk to Remy</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">See every call answered.</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">Tell us a little about your front desk. We&apos;ll show you how Remy can answer, qualify, and resolve calls without adding another shift.</p>
          </section>
          <DemoForm />
        </div>
      </main>
    </>
  );
}

"use client";

import { FormEvent, useState } from "react";

const initialForm = { name: "", email: "", company: "", phone: "", message: "" };

export function DemoForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/demo", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
      if (!response.ok) throw new Error("request failed");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <div className="glass rounded-3xl p-8 sm:p-10" role="status"><p className="text-sm font-medium text-brand-3">Request received</p><h2 className="mt-3 text-3xl font-semibold text-foreground">We&apos;ll be in touch.</h2><p className="mt-4 leading-relaxed text-muted">Thanks for your interest in Remy. Our team will reach out within one business day.</p></div>;
  }

  return <form onSubmit={submit} className="glass flex flex-col gap-5 rounded-3xl p-6 sm:p-10">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="flex flex-col gap-2 text-sm text-muted">Name<input required minLength={2} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 rounded-xl border border-white/10 bg-black/20 px-4 text-foreground outline-none focus:border-brand/60" /></label>
      <label className="flex flex-col gap-2 text-sm text-muted">Work email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 rounded-xl border border-white/10 bg-black/20 px-4 text-foreground outline-none focus:border-brand/60" /></label>
    </div>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="flex flex-col gap-2 text-sm text-muted">Company<input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="h-12 rounded-xl border border-white/10 bg-black/20 px-4 text-foreground outline-none focus:border-brand/60" /></label>
      <label className="flex flex-col gap-2 text-sm text-muted">Phone <span className="text-xs text-faint">Optional</span><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-12 rounded-xl border border-white/10 bg-black/20 px-4 text-foreground outline-none focus:border-brand/60" /></label>
    </div>
    <label className="flex flex-col gap-2 text-sm text-muted">What would you like Remy to handle?<textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-foreground outline-none focus:border-brand/60" /></label>
    {status === "error" && <p className="text-sm text-red-300" role="alert">We couldn&apos;t send that request. Please try again.</p>}
    <button disabled={status === "sending"} className="h-12 rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 text-sm font-semibold text-[#07070d] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70">{status === "sending" ? "Sending…" : "Request a demo"}</button>
    <p className="text-center text-xs text-faint">No spam. Just a thoughtful walkthrough of your use case.</p>
  </form>;
}

import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const demoRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const payload = demoRequestSchema.parse(await request.json());
    const supabase = await createClient();
    const { error } = await supabase.from("demo_requests").insert({
      name: payload.name,
      email: payload.email,
      company: payload.company || null,
      phone: payload.phone || null,
      message: payload.message || null,
      source: "website",
    });

    if (error) {
      console.error("[v0] Demo request insert failed", error);
      return NextResponse.json({ error: "Unable to save your request." }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  }
}

"use client";

import { useEffect, useState } from "react";
import { Phone } from "@/components/icons";

const BARS = [6, 11, 15, 9, 5];

export function IncomingCall() {
  const [phase, setPhase] = useState<"incoming" | "connected">("incoming");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let stop = false;
    const ids: ReturnType<typeof setTimeout>[] = [];

    const toConnected = () => {
      if (stop) return;
      setPhase("connected");
      setSeconds(0);
      let s = 0;
      const tick = () => {
        if (stop) return;
        s += 1;
        setSeconds(s);
        if (s < 6) {
          ids.push(setTimeout(tick, 1000));
        } else {
          setPhase("incoming");
          setSeconds(0);
          ids.push(setTimeout(toConnected, 3200));
        }
      };
      ids.push(setTimeout(tick, 1000));
    };

    ids.push(setTimeout(toConnected, 3200));
    return () => {
      stop = true;
      ids.forEach(clearTimeout);
    };
  }, []);

  const incoming = phase === "incoming";
  const mmss = `00:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="glass w-full rounded-2xl p-3 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
      <div key={phase} className="animate-fade-up flex items-center gap-3">
        {/* caller avatar */}
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-sm font-semibold text-[#07070d]">
          {incoming ? (
            <>
              <span className="animate-pulse-ring absolute inset-0 rounded-full border border-emerald-400/70" />
              <span
                className="animate-pulse-ring absolute inset-0 rounded-full border border-emerald-400/50"
                style={{ animationDelay: "0.6s" }}
              />
            </>
          ) : null}
          JC
        </span>

        {/* call info */}
        <div className="min-w-0 flex-1 leading-tight">
          {incoming ? (
            <>
              <div className="flex items-center gap-1.5">
                <span className="animate-blink h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-300">
                  Incoming call
                </p>
              </div>
              <p className="truncate text-sm font-semibold text-foreground">
                Jordan Carter
              </p>
              <p className="truncate text-[11px] text-muted">
                +1 (415) 555-0132
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1.5">
                <span className="animate-blink h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-300">
                  Connected · {mmss}
                </p>
              </div>
              <div className="mt-2 flex h-4 items-end gap-0.5">
                {BARS.map((height, index) => (
                  <span
                    key={index}
                    className="animate-wave w-0.5 origin-bottom rounded-full bg-brand-2"
                    style={{
                      height: `${height}px`,
                      animationDelay: `${index * 0.14}s`,
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* actions */}
        {incoming ? (
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15 text-red-400">
              <Phone className="h-4 w-4 rotate-[135deg]" />
            </span>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-[#06130d]">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400/60" />
              <Phone className="relative h-4 w-4" />
            </span>
          </div>
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15 text-red-400">
            <Phone className="h-4 w-4 rotate-[135deg]" />
          </span>
        )}
      </div>
    </div>
  );
}

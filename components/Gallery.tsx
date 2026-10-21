"use client";

import { useState } from "react";
import type { Shot } from "@/data/content";

export default function Gallery({ shots, title }: { shots: Shot[]; title: string }) {
  const [i, setI] = useState(0);
  const shot = shots[i];

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line-2 bg-panel-2">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="size-2 rounded-full bg-line-2" />
          <span className="size-2 rounded-full bg-line-2" />
          <span className="size-2 rounded-full bg-line-2" />
          <span className="ml-2 truncate font-mono text-[11px] text-dim">{shot.caption}</span>
        </div>
        <div className="relative aspect-[16/10] bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={shot.src}
            src={shot.src}
            alt={`${title} — ${shot.caption}`}
            className="absolute inset-0 size-full animate-rise object-cover object-left-top"
            loading="lazy"
          />
        </div>
      </div>

      {shots.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {shots.map((s, idx) => (
            <button
              key={s.src}
              onClick={() => setI(idx)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                idx === i
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-line-2 text-muted hover:border-muted hover:text-fg"
              }`}
            >
              {s.caption}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

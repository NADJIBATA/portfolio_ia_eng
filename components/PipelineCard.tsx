"use client";

import { useEffect, useState } from "react";

const steps = [
  { k: "retrieve.bm25", v: "top-50", t: "12 ms" },
  { k: "retrieve.dense", v: "top-50", t: "18 ms" },
  { k: "fuse.rrf", v: "top-20", t: "1 ms" },
  { k: "rerank.cross", v: "top-5", t: "41 ms" },
  { k: "llm.generate", v: "3 citations", t: "stream" },
];

export default function PipelineCard() {
  const [n, setN] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setN((x) => (x >= steps.length + 3 ? 0 : x + 1)), 650);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-md rounded-2xl border border-line-2 bg-panel/90 shadow-2xl shadow-black/50 backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-dim">rag_pipeline.trace</span>
      </div>

      <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
        <p className="text-muted">
          <span className="text-accent">❯</span> query{" "}
          <span className="text-fg">&quot;Which clauses changed between v1 and v2?&quot;</span>
        </p>

        <ul className="space-y-1.5">
          {steps.map((s, i) => {
            const on = i < n;
            return (
              <li
                key={s.k}
                className={`flex items-center justify-between transition-all duration-300 ${
                  on ? "opacity-100" : "translate-x-1 opacity-20"
                }`}
              >
                <span>
                  <span className="text-dim">{i === steps.length - 1 ? "└─" : "├─"} </span>
                  <span className={on ? "text-accent-2" : "text-muted"}>{s.k}</span>
                </span>
                <span className="flex gap-4 text-muted">
                  <span>{s.v}</span>
                  <span className="w-12 text-right text-dim">{s.t}</span>
                </span>
              </li>
            );
          })}
        </ul>

        <div
          className={`rounded-lg border border-line bg-ink/60 p-3 text-[12.5px] transition-opacity duration-500 ${
            n > steps.length ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-fg">
            Payment terms moved from 30 to 45 days <span className="text-accent">[S2]</span>, and a new termination
            clause was added <span className="text-accent">[S4]</span>
            <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-accent" />
          </p>
        </div>
      </div>
    </div>
  );
}

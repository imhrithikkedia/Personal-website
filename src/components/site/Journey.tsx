import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import hevoLogo from "@/assets/logos/hevo.png";
import inferlessLogo from "@/assets/logos/inferless.png";
import pwcLogo from "@/assets/logos/pwc.png";
import primusLogo from "@/assets/logos/primus.jpg";

type Chapter = {
  id: string;
  org: string;
  role: string;
  period: string;
  theme: string;
  intro?: string;
  stages?: { label: string; text: string }[];
  points: string[];
  current?: boolean;
  logo?: string;
  monogram?: string;
};

const chapters: Chapter[] = [
  {
    id: "primus",
    org: "Primus Senior Living",
    logo: primusLogo,
    role: "Founder's Office → Business Builder → P&L & City Leadership",
    period: "Now",
    current: true,
    theme: "Every few months, a different problem. The mission stayed the same: move the business forward.",
    intro:
      "The longest and most significant chapter so far — one that kept changing shape as the business did.",
    stages: [
      {
        label: "Learn",
        text: "Real estate fundamentals, FSI/FAR, land economics, JD/JV/DM structures, DCF, IRR and cash flows.",
      },
      {
        label: "Build",
        text: "Evaluating expansion opportunities across cities, working on travel/category P&L, marketing/referral channels, partnerships and special projects.",
      },
      {
        label: "Own",
        text: "Taking ownership of city-level P&L and Founder's Office responsibilities.",
      },
    ],
    points: [
      "Started by jumping into business development and deal evaluation",
      "Moved across marketing and growth — referral marketing, influencer campaigns, content, BTL and multi-city initiatives",
      "Piloted domestic travel experiences for the 50+ demographic before a strategic reset",
      "Worked on strategic projects across CX, operations, digital transformation, M&A and new initiatives",
      "Built partnerships and alliances with multiple brands",
    ],
  },

  {
    id: "hevo",
    org: "Hevo Data",
    logo: hevoLogo,
    role: "Strategy & Execution | BizOps",
    period: "Before that",
    theme: "Learning how growth happens when strategy meets execution.",
    points: [
      "GTM and new initiatives",
      "Community and event-led growth",
      "Strategic partnerships",
      "Customer stories and content",
      "Projects that contributed to pipeline and brand visibility",
      "Working across teams instead of staying inside one function",
    ],
  },
  {
    id: "inferless",
    org: "Inferless",
    logo: inferlessLogo,
    role: "Founder's Office | Founding Team",
    period: "The generalist bootcamp",
    theme: "The place where I learned that context-switching can be a feature, not a bug.",
    intro:
      "My first real Founder's Office experience taught me what operating without a playbook actually means.",
    points: [
      "Worked across business operations, finance, sales, marketing, people ops, customer success and compliance",
      "Experienced the realities of a startup navigating pivots and the search for product-market fit",
    ],
  },
  {
    id: "pwc",
    org: "PwC",
    logo: pwcLogo,
    role: "Associate | Digital Assurance & Transparency",
    period: "Where it started",
    theme: "So I left the predictable path and moved to Bengaluru to join a startup.",
    intro:
      "My first job taught me something important: I wasn't looking for a bigger title or a clearer ladder. I wanted to understand how businesses were actually built.",
    points: [],
  },
];

export function Journey() {
  const [openId, setOpenId] = useState<string>("primus");

  return (
    <section id="journey" className="border-t border-border bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">02 — The journey</p>
          <h2 className="display mt-5 max-w-2xl text-4xl md:text-6xl">
            Not a résumé. More like a series of chapters.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20">
          {chapters.map((c, i) => {
            const isOpen = openId === c.id;
            return (
              <Reveal key={c.id} delay={i * 60}>
                <div className="relative grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10">
                  {/* rail */}
                  <div className="relative flex flex-col items-center">
                    <span
                      className={cn(
                        "mt-2 size-3 shrink-0 rounded-full border transition-colors",
                        c.current
                          ? "border-accent bg-accent now-dot"
                          : isOpen
                            ? "border-foreground bg-foreground"
                            : "border-border bg-background",
                      )}
                    />
                    {i < chapters.length - 1 && (
                      <span className="w-px flex-1 bg-border" aria-hidden="true" />
                    )}
                  </div>

                  <div className="pb-12 md:pb-16">
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? "" : c.id)}
                      aria-expanded={isOpen}
                      className="group block w-full text-left"
                    >
                      <p className="eyebrow">{c.period}</p>
                      <div className="mt-3 flex items-center gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background">
                          {c.logo ? (
                            <img
                              src={c.logo}
                              alt={`${c.org} logo`}
                              className={cn(c.id === "primus" ? "size-full object-cover" : "size-8 object-contain")}
                              loading="lazy"
                            />
                          ) : (
                            <span className="display text-sm tracking-tight text-accent">{c.monogram}</span>
                          )}
                        </span>
                        <h3 className="display text-3xl transition-colors group-hover:text-accent md:text-4xl">
                          {c.org}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                        {c.role}
                      </p>
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-out",
                        isOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        {c.intro && (
                          <p className="max-w-2xl text-base leading-relaxed text-foreground/80">
                            {c.intro}
                          </p>
                        )}
                        {c.stages && (
                          <ol className="mt-8 grid gap-6 md:grid-cols-3">
                            {c.stages.map((s) => (
                              <li key={s.label} className="border-t border-border pt-4">
                                <p className="eyebrow text-accent">{s.label}</p>
                                <p className="mt-3 text-[0.94rem] leading-relaxed text-foreground/75">
                                  {s.text}
                                </p>
                              </li>
                            ))}
                          </ol>
                        )}

                        {c.points.length > 0 && (
                          <ul className="mt-6 max-w-2xl space-y-3">
                            {c.points.map((p) => (
                              <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-foreground/75">
                                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <p className="display mt-8 max-w-xl border-l-2 border-accent pl-5 text-xl italic md:text-2xl">
                          {c.theme}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

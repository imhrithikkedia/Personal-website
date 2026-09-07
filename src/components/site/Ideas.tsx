import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

type Idea = {
  n: string;
  name: string;
  line: string;
  category: string;
  status: "Exploring" | "Could Build" | "Interesting Problem" | "Parked" | "Potentially Next";
  weight?: "lead" | "strong";
  body: { heading?: string; text?: string; list?: string[] }[];
};

const ideas: Idea[] = [
  {
    n: "01",
    name: "BYOB Social Club",
    line: "A social space where you bring your own alcohol instead of paying 5–6x MRP at a bar.",
    category: "Hospitality / Consumer",
    status: "Could Build",
    weight: "lead",
    body: [
      {
        text: "A chain of BYOB social spaces where people can bring their own alcohol instead of paying the 5–6x MRP markup typically associated with bars.",
      },
      {
        heading: "The insight",
        text: "A lot of people want a place to chill and drink with friends, but don't necessarily want to drink at home because of restrictions, lack of ambience, or simply because they want to go somewhere social. At the same time, traditional bars can make the experience expensive because of alcohol markups.",
      },
      {
        text: "The concept is a BYOB-themed social space where there is a liquor shop on the ground floor and customers can purchase alcohol there and bring it upstairs.",
      },
      {
        heading: "Where revenue could come from",
        list: [
          "Sitting charges",
          "Food",
          "Indoor activities",
          "Liquor sales, including takeaway",
          "Liquor purchased by customers visiting the venue",
        ],
      },
      {
        heading: "The experience",
        list: ["Bowling", "Snooker", "Foosball", "Virtual games", "Other indoor games and social activities"],
      },
      {
        text: "The long-term ambition is to build a recognizable chain across major Indian cities with a consistent theme and experience. This is an idea being explored — nothing launched, nothing approved.",
      },
    ],
  },
  {
    n: "02",
    name: "Autobiography",
    line: "An app where people write and build their own autobiography over time.",
    category: "Consumer / Social",
    status: "Exploring",
    body: [
      {
        text: "An application where people can write and build their own autobiography over time. Still only a concept.",
      },
    ],
  },
  {
    n: "03",
    name: "Student + Parent Insurance",
    line: "Insurance built for students and their parents during college years.",
    category: "Fintech / Insurance",
    status: "Interesting Problem",
    body: [
      {
        text: "Insurance designed specifically for students and their parents during college, similar in spirit to the insurance and benefits ecosystem available to working professionals.",
      },
    ],
  },
  {
    n: "04",
    name: "Mannat",
    line: "Make a promise tied to an outcome — if it happens, the amount goes where you chose.",
    category: "Consumer / Faith",
    status: "Exploring",
    body: [
      {
        text: "An application where people can make a mannat or promise connected to a desired outcome.",
      },
      {
        text: "If the desired outcome happens, the committed amount is sent to the temple, mosque, church, NGO, or other institution selected by the user. If the condition is not fulfilled, the amount is refunded.",
      },
      { text: "An early-stage concept only." },
    ],
  },
  {
    n: "05",
    name: "Campus Hiring Network",
    line: "A network connecting colleges with companies that want to hire on campus.",
    category: "EdTech / Hiring",
    status: "Could Build",
    body: [
      {
        text: "A platform connecting colleges with companies that want to hire through campus placements.",
      },
      {
        text: "Colleges could invite relevant companies for on-campus hiring, while companies get a way to discover and engage with colleges where they want to recruit.",
      },
    ],
  },
  {
    n: "06",
    name: "Alternative to LinkedIn",
    line: "A professional network built to keep your CV permanently current.",
    category: "Future of Work / Hiring",
    status: "Exploring",
    body: [
      {
        text: "An alternative professional network where the core objective is to keep a person's CV continuously updated rather than rewriting and tailoring it every time they apply for a job. The CV can be shared directly with companies during applications.",
      },
      {
        heading: "For companies",
        list: [
          "ATS functionality",
          "Hiring management software",
          "Outbound hiring capabilities",
          "Discovery of strong candidate profiles",
        ],
      },
      {
        heading: "Core thesis",
        text: "Your professional profile should stay ready — not be rebuilt every time you apply.",
      },
    ],
  },
  {
    n: "07",
    name: "TODIRE",
    line: "A discovery layer for the tools and service partners startup teams actually trust.",
    category: "B2B / Startup Ecosystem",
    status: "Exploring",
    weight: "strong",
    body: [
      {
        text: "TODIRE is a discovery platform for tools and service partners used by startup teams.",
      },
      {
        text: "Startup decisions about tools and agencies often happen through scattered recommendations across WhatsApp groups, Slack channels, and communities.",
      },
      {
        text: "TODIRE organizes these recommendations into a structured, searchable repository to help teams discover trusted solutions faster.",
      },
    ],
  },
  {
    n: "08",
    name: "FIRE",
    line: "Bringing senior real estate operators into one room, across functions.",
    category: "Real Estate / Community",
    status: "Exploring",
    weight: "strong",
    body: [
      {
        text: "The idea for FIRE took shape while working at Primus, where I saw the depth, complexity, and beauty of the real estate industry up close.",
      },
      {
        text: "Despite being one of the most execution-heavy and impact-driven industries, real estate operators are often underrepresented, fragmented, or unfairly looked down upon compared to their counterparts in other industries.",
      },
      {
        heading: "Who it would bring together",
        list: [
          "Business Development",
          "Finance",
          "Sales",
          "Marketing",
          "Liaisoning",
          "Engineering",
          "Design",
          "Projects",
          "Asset Management",
        ],
      },
      {
        heading: "The goal",
        text: "Enable real conversations, cross-functional learning, and the exchange of on-ground insights that lead to better execution, stronger collaboration, and meaningful innovation across India's real estate ecosystem. Still an idea, not a launched community.",
      },
    ],
  },
  {
    n: "09",
    name: "Dabbawali",
    line: "A hyperlocal tiffin layer built on existing dabbawalas, not a new kitchen.",
    category: "Food / Hyperlocal",
    status: "Could Build",
    weight: "strong",
    body: [
      {
        text: "A hyperlocal tiffin aggregation and delivery platform for college students and working professionals who want affordable, reliable, home-style meals but don't have access to a regular tiffin service.",
      },
      {
        text: "Instead of setting up our own kitchen, the model partners with 2–3 independent dabbawalas/home cooks in a locality. Customers can choose between their menus and plans, while the platform aggregates demand and manages last-mile delivery through its own delivery network.",
      },
      {
        heading: "Initial model",
        text: "WhatsApp-first and hyperlocal, starting with one office/college cluster and approximately 20–50 daily customers.",
      },
      {
        heading: "Value proposition",
        list: [
          "For dabbawalas: predictable recurring orders without spending heavily on customer acquisition",
          "For customers: choice, consistency and reliable delivery through a single platform",
        ],
      },
      {
        heading: "Long-term thesis",
        text: "As demand density increases, expand by onboarding more dabbawalas and locations — eventually becoming the distribution and reliability layer for fragmented home-food/tiffin providers rather than a kitchen or food-production company.",
      },
    ],
  },
  {
    n: "10",
    name: "Travel Platform",
    line: "One place to plan, book and share a trip instead of five tabs.",
    category: "Travel / Consumer",
    status: "Exploring",
    body: [
      {
        text: "A one-stop travel platform for modern Indian travellers aged 25–45 who value personalized experiences and convenience.",
      },
      {
        heading: "The problem",
        text: "Travel planning is fragmented. People often rely on multiple apps and websites for different aspects of a trip, creating a cumbersome and time-consuming experience.",
      },
      {
        heading: "What it would bring together",
        list: [
          "Destination discovery",
          "Itinerary planning",
          "Accommodation booking",
          "Activity booking",
          "Sharing travel experiences",
        ],
      },
      {
        text: "The goal is to simplify travel planning through personalized recommendations tailored to each traveller's preferences and budget, for both domestic and international travellers.",
      },
    ],
  },
  {
    n: "11",
    name: "Astha Gyan",
    line: "A repository of India's temples — and the stories behind them.",
    category: "Faith / Culture / Consumer",
    status: "Exploring",
    weight: "strong",
    body: [
      {
        text: "A digital repository of temples across India, capturing not just where they are, but the stories behind them — who the temple is dedicated to, why it was built, how it came into existence, and the history and beliefs surrounding it.",
      },
      {
        text: "The initial product is essentially a discovery and knowledge layer for India's temples.",
      },
      {
        heading: "Where it could go",
        list: [
          "Discover temples across India",
          "Learn the story and significance behind each temple",
          "Explore temple history, traditions and associated stories",
          "Experience digital darshan",
          "Order / offer prasad digitally",
          "Potentially make other offerings or participate in temple services remotely",
        ],
      },
      {
        heading: "Long-term thesis",
        text: "Start by becoming the repository and discovery layer for India's temples and their stories. Then gradually become the digital layer connecting devotees with temples, without requiring them to physically be there. An idea being explored, not an existing business.",
      },
    ],
  },
];

function IdeaCard({ idea, delay }: { idea: Idea; delay: number }) {
  const [open, setOpen] = useState(false);
  const lead = idea.weight === "lead";
  const strong = idea.weight === "strong";

  return (
    <Reveal
      delay={delay}
      className={cn(lead && "md:col-span-2", strong && "sm:col-span-1")}
    >
      <div
        className={cn(
          "flex h-full flex-col border-t border-border pt-6",
          lead && "border-t-2 border-accent/60",
        )}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group text-left"
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-xs text-muted-foreground">{idea.n}</span>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
              {idea.status}
            </span>
          </div>

          <h3
            className={cn(
              "display mt-3 transition-colors group-hover:text-accent",
              lead ? "text-3xl md:text-4xl" : strong ? "text-2xl md:text-3xl" : "text-2xl",
            )}
          >
            {idea.name}
          </h3>

          <p
            className={cn(
              "mt-3 leading-relaxed text-foreground/70",
              lead ? "max-w-xl text-[1.02rem]" : "text-[0.95rem]",
            )}
          >
            {idea.line}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
              {idea.category}
            </span>
            <span className="link-underline text-xs text-foreground/60">
              {open ? "Close −" : "Read the thinking +"}
            </span>
          </div>
        </button>

        <div
          className={cn(
            "grid transition-all duration-500 ease-out",
            open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="max-w-2xl space-y-4 border-l border-border pl-5">
              {idea.body.map((b, i) => (
                <div key={i}>
                  {b.heading && (
                    <p className="eyebrow mb-2 text-foreground/60">{b.heading}</p>
                  )}
                  {b.text && (
                    <p className="text-[0.94rem] leading-relaxed text-foreground/75">{b.text}</p>
                  )}
                  {b.list && (
                    <ul className="space-y-2">
                      {b.list.map((l) => (
                        <li
                          key={l}
                          className="flex gap-3 text-[0.94rem] leading-relaxed text-foreground/75"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Ideas() {
  return (
    <section id="ideas" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">04 — Things I might build</p>
          <h2 className="display mt-5 max-w-3xl text-4xl md:text-6xl">Things I might build.</h2>
          <p className="display mt-6 max-w-2xl text-xl italic text-accent md:text-2xl">
            I have a bad habit of spotting problems and immediately wondering if there's a business
            hiding inside them.
          </p>
          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-foreground/75">
            Some are half-baked. Some have been thought through a little too much. A few I genuinely
            want to build someday. This is where I keep them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-14 gap-y-4 sm:grid-cols-2">
          {ideas.map((idea, i) => (
            <IdeaCard key={idea.n} idea={idea} delay={Math.min(i, 6) * 40} />
          ))}
        </div>

        <Reveal>
          <div className="mt-20 border-t border-border pt-10">
            <p className="display max-w-3xl text-2xl leading-snug md:text-4xl">
              Most of these will probably never get built. That's kind of the point.
            </p>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-foreground/70">
              I'd rather have 100 problems worth thinking about than wait for one perfect idea.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

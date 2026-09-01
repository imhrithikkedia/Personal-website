import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { Journey } from "@/components/site/Journey";
import { Foc } from "@/components/site/Foc";
import { SocialLinks } from "@/components/site/SocialLinks";
import texture from "@/assets/texture.jpg";
import portrait from "@/assets/hrithik-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hrithik Kedia — Generalist Operator & Community Builder" },
      {
        name: "description",
        content:
          "I build where the problems are messy and the playbook doesn't exist yet. Generalist operator across strategy, business, P&L and growth — and co-builder of Founder's Office Club.",
      },
      { property: "og:title", content: "Hrithik Kedia — Generalist Operator" },
      {
        property: "og:description",
        content:
          "A personal operating story: Founder's Office, business building, P&L ownership and community.",
      },
    ],
  }),
  component: Home,
});

const LINKEDIN = "https://www.linkedin.com/in/imhrithikkedia/";
const FOC = "https://linktr.ee/foc_community";
const EMAIL = "mailto:imhrithikkedia@gmail.com";
const TOPMATE = "https://topmate.io/imhrithikkedia";

const tags = ["Founder's Office", "Business & P&L", "Strategy & Execution", "Community Building"];

const owned = [
  {
    icon: "📈",
    title: "Businesses & P&Ls",
    body: "From evaluating new markets to owning categories and thinking about unit economics, I enjoy understanding what makes a business work.",
  },
  {
    icon: "🚀",
    title: "Zero-to-One & Special Projects",
    body: "The projects with the least clarity are often the most fun.",
  },
  {
    icon: "🎯",
    title: "Growth & GTM",
    body: "Community, events, partnerships, marketing and new initiatives — always with an eye on the business outcome.",
  },
  {
    icon: "🤝",
    title: "Partnerships & Ecosystems",
    body: "I enjoy bringing the right people and organisations together to create leverage.",
  },
  {
    icon: "⚙️",
    title: "Operations & Systems",
    body: "Behind every exciting business is usually an unglamorous process that needs fixing.",
  },
  {
    icon: "🧩",
    title: "Connecting the Dots",
    body: "My biggest strength is probably context — the ability to see how different parts of a business connect.",
  },
];

const principles = [
  {
    n: "01",
    title: "Context before conclusions",
    body: "The answer usually changes when you understand the full picture.",
  },
  {
    n: "02",
    title: "Ownership beats job descriptions",
    body: "If something important needs doing, the org chart can wait.",
  },
  {
    n: "03",
    title: "Strategy without execution is just a nice document",
    body: "Ideas only become valuable when someone is willing to get their hands dirty.",
  },
  {
    n: "04",
    title: "Build people and communities along the way",
    body: "The most meaningful work compounds when it helps other people grow too.",
  },
];

const outside = [
  "Building and experimenting with communities",
  "Meeting founders, operators and interesting people",
  "Thinking and talking about careers in the generalist ecosystem",
  "Occasionally getting in front of the camera for things I never expected to be doing at work",
  "Travelling and collecting experiences",
  "Trying to figure out what's next",
];

const conversations = [
  "How do I break into the Founder's Office / CoS / EIR ecosystem?",
  "How do I build leverage across functions?",
  "How do I take something from zero to one?",
  "I just need another operator's perspective.",
];

const testimonials: { quote: string; name: string }[] = [
  {
    quote:
      "Incredibly generous with context and frameworks — I walked away with a much clearer view of what the role actually involves.",
    name: "Topmate review",
  },
  {
    quote:
      "Honest, practical and no fluff. Saved me months of trial and error in figuring out my next move.",
    name: "Topmate review",
  },
];



function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-6xl items-end gap-14 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <span className="now-dot size-1.5 rounded-full bg-accent" />
                <span className="eyebrow text-foreground/70">
                  Now — Business & P&amp;L at Primus Senior Living · Co-building FOC
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="eyebrow mt-10">Hi, I'm Hrithik Kedia 👋</p>
              <h1 className="display mt-5 text-[2.7rem] leading-[1.03] sm:text-6xl lg:text-7xl">
                I like building things when there isn't a{" "}
                <span className="italic text-accent">clear manual.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 max-w-xl space-y-4 text-[1.02rem] leading-relaxed text-foreground/75">
                <p>
                  I'm a generalist operator working at the intersection of strategy and execution.
                  Over the last few years, I've worked across startups and businesses, taking on
                  everything from GTM and growth to business development, P&amp;Ls, partnerships,
                  and special projects.
                </p>
                <p>
                  Somehow, I also found time to co-build a community for people doing similarly
                  chaotic jobs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs tracking-wide text-foreground/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href={TOPMATE}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span>Want to pick my brain?</span>
                  <span aria-hidden="true">→</span>
                  <span className="display text-base italic">Book a 1:1</span>
                </a>
                <a href="#journey" className="link-underline text-sm text-muted-foreground">
                  Explore my journey ↓
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <figure className="relative">
              <img
                src={portrait}
                alt="Portrait of Hrithik Kedia"
                width={719}
                height={719}
                className="aspect-[4/5] w-full rounded-sm object-cover"
                style={{ boxShadow: "var(--shadow-soft)" }}
              />
              <img
                src={texture}
                alt=""
                aria-hidden="true"
                width={1200}
                height={1500}
                className="absolute -bottom-6 -left-6 -z-10 aspect-[4/5] w-2/3 rounded-sm object-cover opacity-60"
              />
              <figcaption className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
                “I build where the problems are messy and the playbook doesn't exist yet.”
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE STATEMENT */}
      <section className="border-y border-border bg-primary py-14 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal>
            <p className="display text-2xl leading-snug md:text-4xl">
              Strategy is interesting.{" "}
              <span className="italic opacity-70">Execution is where I feel at home.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">01 — The generalist advantage</p>
            <h2 className="display mt-5 max-w-3xl text-4xl md:text-6xl">
              I never really fit into one job description.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.15fr]">
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-foreground/80">
                Early in my career, I realised I was less interested in climbing a predefined
                corporate ladder and more curious about how businesses actually work.
              </p>
              <p className="display mt-6 text-2xl italic text-accent">So I chose the messier route.</p>
            </Reveal>

            <Reveal delay={140}>
              <div className="space-y-5 text-[1.02rem] leading-relaxed text-foreground/75">
                <p>
                  I've worked in Founder's Office and Business Operations roles where one quarter
                  could mean building GTM strategies and the next could mean evaluating a new
                  market, running a P&amp;L, fixing an internal process, launching a campaign, or
                  working on a partnership.
                </p>
                <p>That's what I love about being a generalist.</p>
                <p>
                  You develop context. You learn to connect dots across functions. And most
                  importantly, you learn how to move from “someone should solve this” to “I'll
                  figure this out.”
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <blockquote className="mt-16 border-t border-border pt-10">
              <p className="display max-w-3xl text-3xl leading-tight md:text-5xl">
                My favourite job description is usually the one that hasn't been written yet.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <Journey />

      {/* BUILT & OWNED */}
      <section id="owned" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">03 — Things I've built &amp; owned</p>
            <h2 className="display mt-5 max-w-2xl text-4xl md:text-6xl">
              Less a skill list. More how I operate.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-14 md:grid-cols-2">
            {owned.map((o, i) => (
              <Reveal key={o.title} delay={i * 50}>
                <div className="group border-t border-border py-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xl">{o.icon}</span>
                    <h3 className="display text-2xl transition-colors group-hover:text-accent md:text-3xl">
                      {o.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-md text-[0.97rem] leading-relaxed text-foreground/70">
                    {o.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOC */}
      <Foc />

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">05 — My operating philosophy</p>
            <h2 className="display mt-5 max-w-2xl text-4xl md:text-6xl">Four things I keep coming back to.</h2>
          </Reveal>

          <div className="mt-14 grid gap-x-16 gap-y-2 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="border-t border-border py-10">
                  <span className="eyebrow text-accent">{p.n}</span>
                  <h3 className="display mt-4 text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-md text-[0.97rem] leading-relaxed text-foreground/70">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUTSIDE THE SPREADSHEET */}
      <section className="border-t border-border bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">06 — Outside the spreadsheet</p>
            <h2 className="display mt-5 max-w-2xl text-4xl md:text-5xl">
              When I'm not jumping between business problems…
            </h2>
          </Reveal>

          <ul className="mt-12 space-y-1">
            {outside.map((o, i) => (
              <Reveal key={o} delay={i * 50} as="li">
                <div className="group flex items-baseline gap-5 border-b border-border/70 py-5">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-foreground/80 transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                    {o}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* VALUE + SOCIAL PROOF */}
      <section id="contact" className="border-t border-border py-24 md:py-36">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">07 — Worth a conversation?</p>
            <h2 className="display mt-6 max-w-4xl text-3xl leading-tight md:text-5xl">
              Sometimes 30 minutes can save you{" "}
              <span className="italic text-accent">6 months of figuring it out yourself.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <Reveal delay={80}>
              <div className="space-y-4 text-[1.02rem] leading-relaxed text-foreground/75">
                <p>
                  I've spent the last few years navigating Founder's Office, Business Operations,
                  GTM, growth, P&amp;Ls, partnerships and the wonderfully messy space in between.
                </p>
                <p>
                  I've also spent a lot of time helping people think through careers in the
                  Founder's Office / CoS / EIR ecosystem.
                </p>
                <p>
                  If you're at a point where you're trying to figure something out, I'm happy to
                  share the context, mistakes and lessons I've picked up along the way.
                </p>
              </div>

              <ul className="mt-10 space-y-1">
                {conversations.map((c) => (
                  <li
                    key={c}
                    className="border-b border-border/70 py-3 text-[0.97rem] text-foreground/80"
                  >
                    “{c}”
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-sm border border-border bg-secondary/40 p-6 md:p-8">
                <p className="eyebrow text-accent">On Topmate</p>
                <p className="display mt-3 text-3xl md:text-4xl">5.0 / 5</p>
                <p className="mt-1 text-sm text-muted-foreground">24 ratings · 21 testimonials</p>

                <div className="mt-8 space-y-7">
                  {testimonials.map((t) => (
                    <blockquote key={t.name} className="border-t border-border/70 pt-5">
                      <p className="text-[0.97rem] leading-relaxed text-foreground/80">“{t.quote}”</p>
                      <footer className="mt-3 font-mono text-xs text-muted-foreground">
                        — {t.name}
                      </footer>
                    </blockquote>
                  ))}
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                  Based on 1:1 conversations on Topmate.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-14">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <a
            href="#top"
            className="link-underline mb-10 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ↑ Back to top
          </a>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5 text-muted-foreground">Find me on</p>
              <SocialLinks />
            </div>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground md:items-end">
              <p>© {new Date().getFullYear()} Hrithik Kedia — a personal operating story.</p>
              <p>Generalist Operator · Founder's Office · Community Builder</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

import p1 from "@/assets/foc/sev03493.jpeg.asset.json";
import p2 from "@/assets/foc/373a0255.jpeg.asset.json";
import p3 from "@/assets/foc/2f93ed8c-444b-4916-8464-ae202f2def2d.jpeg.asset.json";
import p4 from "@/assets/foc/img5143.jpeg.asset.json";
import p5 from "@/assets/foc/img4671.jpeg.asset.json";
import p6 from "@/assets/foc/img5803.jpeg.asset.json";
import p7 from "@/assets/foc/85f431b4-4b63-4b9b-abda-e95631c060ca.jpeg.asset.json";
import p8 from "@/assets/foc/img3812.jpeg.asset.json";
import p9 from "@/assets/foc/img2980.jpeg.asset.json";
import p10 from "@/assets/foc/img4625.jpeg.asset.json";

const FOC_LINK = "https://foccommunity.com/";

const videos = [
  {
    id: "5iwHqQFyYpU",
    label: "Masterclasses",
    title: "Founder's Office & Chief of Staff: Career Playbook Secrets",
    blurb: "Learning from people who've been in the room.",
  },
  {
    id: "V3eqH4dw-_M",
    label: "In real life",
    title: "FOC Community Mixer — Bengaluru Edition · June 2025 Aftermovie",
    blurb: "Taking the community beyond the screen.",
  },
  {
    id: "EFqtByzwFVA",
    label: "Conversations",
    title: "Mixer Recap: A Night of Networking, Insights and Fun",
    blurb: "Honest discussions about careers and operating.",
  },
  {
    id: "85ZX5dvfnNU",
    label: "Conversations",
    title: "Mixer Recap: Connecting the Ecosystem's Best",
    blurb: "Operators, founders and builders in one room.",
  },
];

function VideoCard({
  video,
  featured = false,
}: {
  video: (typeof videos)[number];
  featured?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group">
      <div
        className={cn(
          "relative overflow-hidden rounded-sm bg-primary-foreground/10",
          featured ? "aspect-video" : "aspect-video",
        )}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 size-full cursor-pointer"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-primary/25 transition-colors duration-500 group-hover:bg-primary/10" />
            <span
              className={cn(
                "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-500 group-hover:scale-110",
                featured ? "size-16" : "size-12",
              )}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={featured ? "ml-0.5 size-6" : "ml-0.5 size-4"}
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <p className="eyebrow mt-5 text-accent">{video.label}</p>
      <h4
        className={cn(
          "display mt-2 leading-snug",
          featured ? "text-2xl md:text-3xl" : "text-xl",
        )}
      >
        {video.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{video.blurb}</p>
    </div>
  );
}

const features = [
  {
    src: p1.url,
    alt: "Full room of Founder's Office Club operators at a partner community mixer",
    span: "md:col-span-8",
    ratio: "aspect-[16/10]",
  },
  {
    src: p6.url,
    alt: "Small FOC offsite group standing together in a hall",
    span: "md:col-span-4",
    ratio: "aspect-[4/5]",
  },
];

const mosaic = [
  { src: p3.url, alt: "Large group photo of community members at an evening FOC mixer", ratio: "aspect-[4/5]" },
  { src: p7.url, alt: "Members in conversation around a long table at a coffee catch-up", ratio: "aspect-[4/5]" },
  { src: p4.url, alt: "Members crowded together for a group photo at an FOC meetup in a cafe", ratio: "aspect-[4/5]" },
  { src: p8.url, alt: "Five operators laughing around a dinner table after an FOC meetup", ratio: "aspect-[3/2]" },
  { src: p5.url, alt: "Operators posing together after an FOC evening session", ratio: "aspect-[3/2]" },
  { src: p9.url, alt: "Community members standing and chatting at a small evening gathering", ratio: "aspect-[3/2]" },
];


const closer = {
  src: p10.url,
  alt: "Founders and operators together at a rooftop community evening",
  ratio: "aspect-[16/9] md:aspect-[21/9]",
};

export function Foc() {
  return (
    <section
      id="foc"
      className="border-y border-border bg-primary py-24 text-primary-foreground md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* 1 — THE STORY */}
        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-primary-foreground/60">04 — Founder's Office Club</p>
              <h2 className="display mt-5 text-4xl md:text-6xl">
                Building the community I wish I had when I started.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-primary-foreground/75">
                <p>
                  While working in Founder's Office roles myself, I kept noticing the same thing:
                  generalists sit at the centre of a business, but they often build in isolation.
                </p>
                <p>
                  There isn't a conventional career path. There isn't always a peer group. Most of
                  the learning happens through trial, error and context-switching.
                </p>
                <p className="display text-2xl italic leading-snug text-primary-foreground md:text-[1.75rem]">
                  Generalists spend their careers figuring things out. We didn't think they should
                  have to figure everything out alone.
                </p>
                <p>
                  So a few of us started Founder's Office Club — a place for people across
                  Founder's Office, Chief of Staff, Entrepreneur-in-Residence and Office-of-CxO
                  roles to trade experiences, frameworks, opportunities and honest conversations.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <figure className="md:pt-24">
              <img
                src={p2.url}
                alt="Founder's Office Club members and speakers together after a community mixer"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover md:aspect-[4/5]"
              />
              <figcaption className="mt-4 text-xs leading-relaxed text-primary-foreground/55">
                Conversations first. Community after.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* 2 — FOC IN ACTION */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <h3 className="display max-w-2xl text-3xl md:text-5xl">More than a WhatsApp group.</h3>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-primary-foreground/70">
              From conversations online to rooms full of operators, some of the best parts of
              building FOC have happened when people simply get together and start talking.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {features.map((g, i) => (
              <Reveal
                key={g.src}
                delay={i * 80}
                className={cn("group overflow-hidden rounded-sm", g.span)}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={cn(
                    "w-full rounded-sm object-cover transition-all duration-700 group-hover:scale-[1.035] group-hover:brightness-110",
                    g.ratio,
                  )}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-5 md:grid-cols-3 md:gap-5">
            {mosaic.map((g) => (
              <div key={g.src} className="group overflow-hidden rounded-sm">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={cn(
                    "w-full rounded-sm object-cover transition-all duration-700 group-hover:scale-[1.035] group-hover:brightness-110",
                    g.ratio,
                  )}
                />
              </div>
            ))}
          </div>


          <Reveal className="group mt-4 overflow-hidden rounded-sm md:mt-5">
            <img
              src={closer.src}
              alt={closer.alt}
              loading="lazy"
              className={cn(
                "w-full rounded-sm object-cover transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-110",
                closer.ratio,
              )}
            />
          </Reveal>
        </div>


        {/* 3 — LEARNING TOGETHER */}
        <div className="mt-20 border-t border-primary-foreground/15 pt-12 md:mt-24 md:pt-16">
          <Reveal>
            <p className="eyebrow text-primary-foreground/60">Learning together</p>
            <h3 className="display mt-5 max-w-2xl text-3xl md:text-5xl">
              Learning from people doing the job.
            </h3>
            <div className="mt-6 max-w-2xl space-y-4 text-[1.02rem] leading-relaxed text-primary-foreground/70">
              <p>There isn't a textbook for most generalist roles.</p>
              <p>
                So we've tried to learn from the people already figuring it out — operators,
                founders and leaders sharing the frameworks, mistakes and lessons they wish they
                knew earlier.
              </p>
            </div>
          </Reveal>

          <div className="mt-14">
            <Reveal>
              <VideoCard video={videos[0]!} featured />
            </Reveal>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-8">
              {videos.slice(1).map((v, i) => (
                <Reveal key={v.id} delay={i * 70}>
                  <VideoCard video={v} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* 4 — A SMALL COMMUNITY MOMENT */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <blockquote className="mx-auto max-w-4xl text-center">
              <p className="display text-3xl leading-tight md:text-5xl">
                What started as conversations between a few operators has grown into a community of
                people navigating careers that don't always come with a{" "}
                <span className="italic text-accent">clear playbook.</span>
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 text-center">
              <a
                href={FOC_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline inline-flex text-base text-primary-foreground/85 transition-colors hover:text-accent md:text-lg"
              >
                Explore Founder's Office Club →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

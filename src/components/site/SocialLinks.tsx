import { cn } from "@/lib/utils";

type SocialLink = {
  label: string;
  href: string;
  icon: (props: { className?: string }) => React.ReactNode;
};

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.9 2.1h3.7l-8.1 9.3L24 22.4h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 2.1h7.7l5.3 7 5.9-7zm-1.3 18.1h2L6.6 4.2H4.4l13.2 16z" />
  </svg>
);


const MailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/imhrithikkedia", icon: LinkedinIcon },
  { label: "Instagram", href: "https://instagram.com/imhrithikkedia", icon: InstagramIcon },
  { label: "X (Twitter)", href: "https://x.com/imhrithikkedia", icon: XIcon },
  { label: "Email", href: "mailto:imhrithikkedia@gmail.com", icon: MailIcon },
];

export function HeroSocialLinks() {
  return (
    <nav aria-label="Social links" className="mt-8">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <li key={social.label} className="flex items-center gap-x-5">
              {index > 0 && <span aria-hidden="true" className="text-border">·</span>}
              <a
                href={social.href}
                {...(social.href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="link-underline inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Icon className="size-[18px] shrink-0" />
                <span>{social.label === "X (Twitter)" ? "X" : social.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function SocialLinks({ className, label }: { className?: string; label?: string }) {
  return (
    <div className={className}>
      {label && (
        <p className="eyebrow mb-5 text-muted-foreground">{label}</p>
      )}
      <div className="flex flex-wrap items-center gap-3">
        {socialLinks.map((s) => {
          const Icon = s.icon;
          const external = s.href.startsWith("http");
          return (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Icon className="size-[18px]" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

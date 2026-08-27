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

const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.2c3.4 0 5.6 2.4 5.6 5.7 0 .4 0 .9-.05 1.4.15.05.35.02.6-.08.2-.08.5-.18.8-.18.55 0 .98.35.98.85 0 .38-.33.65-.9.94-.75.4-1.7.94-1.7 1.57 0 .28.15.55.34.85.62 1 1.6 2.26 3.35 2.55.4.06.6.38.53.68-.12.5-.75.82-1.75 1.05-.14.36-.24.84-.33 1.23-.05.28-.3.47-.72.47-.18 0-.38-.03-.58-.07-.32-.07-.7-.15-1.32-.15-.3 0-.63.04-.97.13-.62.16-1.43 1.13-3.13 1.13-.04 0-.09 0-.13 0-.05 0-.09 0-.13 0-1.7 0-2.51-.97-3.13-1.13-.34-.09-.67-.13-.97-.13-.62 0-1 .08-1.32.15-.2.04-.4.07-.58.07-.42 0-.67-.19-.72-.47-.09-.39-.19-.87-.33-1.23-1-.23-1.63-.55-1.75-1.05-.07-.3.13-.62.53-.68 1.75-.29 2.73-1.55 3.35-2.55.19-.3.34-.57.34-.85 0-.63-.95-1.17-1.7-1.57-.57-.29-.9-.56-.9-.94 0-.5.43-.85.98-.85.3 0 .6.1.8.18.25.1.45.13.6.08-.05-.5-.05-1-.05-1.4C6.4 4.6 8.6 2.2 12 2.2z" />
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
  { label: "Snapchat", href: "https://www.snapchat.com/add/imhrithikkedia", icon: SnapchatIcon },
  { label: "Email", href: "mailto:hello@hrithikkedia.com", icon: MailIcon },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
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
  );
}

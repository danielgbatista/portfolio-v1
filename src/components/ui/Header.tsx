import Image from "next/image";

import { SOCIAL_LINKS } from "@/constants/social";

const NAV_LINKS = [
  { href: "#about", label: "Sobre Mim" },
  // { href: "#services", label: "Serviços" },
  { href: "#projects", label: "Projetos" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F8F7FF] bg-background/80 font-sans backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-stretch gap-3 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:pb-4 sm:pt-[max(1rem,env(safe-area-inset-top))] md:px-8">
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center justify-center gap-2 font-bold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 sm:min-h-0 sm:justify-start"
        >
          <div className="box-border size-8 shrink-0 rounded-md border border-foreground/10 dark:invert p-1">
            <Image
              src="/assets/images/logo.svg"
              alt="Logo db.goncalves"
              width={32}
              height={32}
              className="box-border size-full shrink-0"
              priority
            />
          </div>
          <span className="text-sm sm:text-base">db.goncalves</span>
        </a>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium sm:gap-x-6 sm:gap-y-2 sm:text-sm"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="inline-flex min-h-11 items-center justify-center rounded-sm px-1.5 text-foreground/80 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 active:bg-foreground/5 sm:min-h-0 sm:px-0 sm:active:bg-transparent"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center text-xs sm:text-sm">
          {SOCIAL_LINKS.map(({ name, url }, index) => (
            <span key={name} className="inline-flex items-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center px-1 text-foreground/80 underline underline-offset-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 active:bg-foreground/5 sm:min-h-0 sm:px-0 sm:active:bg-transparent"
              >
                {name}
              </a>
              {index < SOCIAL_LINKS.length - 1 && (
                <span className="mx-1.5 text-foreground/40" aria-hidden>
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

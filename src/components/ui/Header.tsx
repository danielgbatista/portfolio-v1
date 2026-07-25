import Image from "next/image";

import { SOCIAL_LINKS } from "@/constants/social";

import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "#about", label: "Sobre Mim" },
  // { href: "#services", label: "Serviços" },
  { href: "#projects", label: "Projetos" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F8F7FF] bg-background/80 font-sans backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pb-4 sm:pt-[max(1rem,env(safe-area-inset-top))] md:px-8">
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center gap-2 font-bold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 sm:min-h-0"
        >
          <div className="box-border size-8 shrink-0 rounded-md border border-foreground/10 p-1">
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
          className="hidden items-center gap-x-6 text-sm font-medium sm:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-foreground/80 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center text-sm sm:flex">
          {SOCIAL_LINKS.map(({ name, url }, index) => (
            <span key={name} className="inline-flex items-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-0 text-foreground/80 underline underline-offset-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
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

        <MobileMenu navLinks={NAV_LINKS} socialLinks={SOCIAL_LINKS} />
      </div>
    </header>
  );
}

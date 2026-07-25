import Link from "next/link";

import { PROFILE } from "@/constants/profile";

function NameWithAccent() {
  return (
    <>
      Daniel Gonçalves Batista
    </>
  );
}

function ScrollMouseIcon() {
  return (
    <svg
      className="text-foreground/35"
      width={28}
      height={44}
      viewBox="0 0 28 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="3"
        y="1"
        width="22"
        height="36"
        rx="11"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="14" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="hero-pattern relative flex min-h-[calc(100dvh-5.5rem)] flex-col items-center justify-center overflow-hidden px-4 py-16 font-sans sm:min-h-[calc(100dvh-4.5rem)] sm:px-6 sm:py-20"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1
          id="hero-heading"
          className="animate-hero-in text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Olá, Seja bem-vindo! Sou <NameWithAccent />
        </h1>
        <p className="animate-hero-in animate-hero-in-delay-1 mt-4 text-lg text-foreground/90 sm:text-xl md:text-2xl">
          {PROFILE.role}
        </p>
        <Link
          href="#projects"
          className="interactive-btn animate-hero-in animate-hero-in-delay-2 mt-10 inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 text-sm font-medium text-background hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/50 sm:text-base"
        >
          Explorar Projetos
        </Link>
        <div
          className="animate-hero-in animate-hero-in-delay-3 mt-14 flex flex-col items-center gap-2"
          aria-hidden
        >
          <div className="animate-scroll-bounce">
            <ScrollMouseIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

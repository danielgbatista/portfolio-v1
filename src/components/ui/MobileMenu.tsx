"use client";

import { useEffect, useId, useState } from "react";

import type { SocialLink } from "@/constants/social";

type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  navLinks: readonly NavLink[];
  socialLinks: readonly SocialLink[];
};

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function MobileMenu({ navLinks, socialLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="relative z-[60] inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-[calc(3.5rem+env(safe-area-inset-top))] z-40 bg-foreground/20 backdrop-blur-[2px]"
            aria-hidden
            onClick={closeMenu}
          />

          <div
            id={menuId}
            className="fixed inset-x-0 top-[calc(3.5rem+env(safe-area-inset-top))] z-50 border-b border-[#F8F7FF] bg-background px-4 py-4 shadow-lg backdrop-blur-md"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label="Navegação principal"
            >
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex min-h-11 items-center rounded-sm px-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex flex-wrap items-center border-t border-foreground/10 pt-4 text-sm">
              {socialLinks.map(({ name, url }, index) => (
                <span key={name} className="inline-flex items-center">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center px-2 text-foreground/80 underline underline-offset-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
                    onClick={closeMenu}
                  >
                    {name}
                  </a>
                  {index < socialLinks.length - 1 && (
                    <span className="mx-1.5 text-foreground/40" aria-hidden>
                      /
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

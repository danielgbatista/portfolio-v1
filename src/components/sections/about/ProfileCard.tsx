import Image from "next/image"

import { Card } from "@/components/ui/Card"
import { CONTACT_SOCIAL_LINKS } from "@/constants/contact"

import { SocialIcon } from "./AboutIcons"

type ProfileCardProps = {
  displayShortName: string
  tagline: string
  projectsCount: number
  experienceYears: number
}

export function ProfileCard({
  displayShortName,
  tagline,
  projectsCount,
  experienceYears,
}: ProfileCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg bg-foreground/5">
            <Image
              src="/assets/profile-image.png"
              alt="Daniel Gonçalves Batista"
              width={112}
              height={112}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-[#0C111D]">{displayShortName}</h3>
            <p className="mt-0.5 text-sm text-foreground/70">{tagline}</p>
            <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#0C111D]">
              <div>
                <dt className="sr-only">Projetos</dt>
                <dd className="flex flex-col gap-1">
                  <span className="font-bold text-[1rem] text-[#0C111D]">{projectsCount}</span> 
                  <span className="text-[.875rem] text-[#0C111D]">Projetos</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Experiência</dt>
                <dd className="flex flex-col gap-1">
                  <span className="font-bold text-[1rem] text-[#0C111D]">+{experienceYears}</span>
                  <span className="text-[.875rem] text-[#0C111D]">Experiência</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <nav
          className="flex flex-row gap-2 sm:flex-col sm:items-end"
          aria-label="Contacto e redes"
        >
          {CONTACT_SOCIAL_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex h-5.5 w-5.5 items-center justify-center rounded text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/30"
              style={{ backgroundColor: item.color }}
              aria-label={item.name}
            >
              <SocialIcon name={item.name} />
            </a>
          ))}
        </nav>
      </div>
    </Card>
  )
}

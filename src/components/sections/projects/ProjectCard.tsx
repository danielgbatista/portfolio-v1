"use client"

import Image from "next/image"

import type { Project } from "@/constants/projects"

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.50244 3.0011H13.0046V6.50329" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.6831 3.32007L3.50018 12.5039" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.50402 13.0046H3.00183V9.50244" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

type ProjectCardProps = {
  project: Project
  onExpand: (project: Project) => void
}

export function ProjectCard({ project, onExpand }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#C3C3C3] bg-background relative">
      <div className="relative aspect-[4/3] w-full bg-foreground/5">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <h3 className="min-w-0 truncate text-sm font-medium text-[#0C111D] sm:text-base">
          {project.title}
        </h3>
      </div>
      <button
        type="button"
        onClick={() => onExpand(project)}
        className="absolute top-3 right-3 inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#0C111D] px-2 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C111D]/40 sm:text-sm cursor-pointer"
      >
        <ExternalLinkIcon />
      </button>
    </article>
  )
}

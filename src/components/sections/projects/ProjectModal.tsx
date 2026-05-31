"use client"

import Image from "next/image"
import { useCallback, useEffect, useId, useState } from "react"

import type { Project } from "@/constants/projects"
import { getTechColor, skillTextClass } from "@/lib/techColor"

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4026_161)">
        <path d="M5.68731 13.9999C5.54904 14.0006 5.41386 13.9591 5.29982 13.8809C5.18578 13.8028 5.09831 13.6916 5.04911 13.5624L3.95973 10.7296C3.93767 10.6725 3.90391 10.6207 3.86064 10.5774C3.81737 10.5341 3.76552 10.5004 3.70844 10.4783L0.874808 9.38813C0.74573 9.33859 0.634708 9.25108 0.556394 9.13714C0.478081 9.0232 0.436157 8.88819 0.436157 8.74993C0.436157 8.61167 0.478081 8.47666 0.556394 8.36272C0.634708 8.24878 0.74573 8.16127 0.874808 8.11173L3.70762 7.02235C3.7647 7.00029 3.81655 6.96654 3.85982 6.92326C3.90309 6.87999 3.93685 6.82815 3.95891 6.77106L5.04911 3.93743C5.09865 3.80835 5.18616 3.69733 5.3001 3.61902C5.41404 3.5407 5.54905 3.49878 5.68731 3.49878C5.82557 3.49878 5.96058 3.5407 6.07452 3.61902C6.18846 3.69733 6.27597 3.80835 6.32551 3.93743L7.41489 6.77024C7.43695 6.82733 7.4707 6.87917 7.51398 6.92244C7.55725 6.96572 7.60909 6.99947 7.66618 7.02153L10.4826 8.10517C10.6169 8.15496 10.7326 8.24494 10.814 8.36285C10.8954 8.48077 10.9384 8.62089 10.9373 8.76415C10.9352 8.9 10.8924 9.0321 10.8144 9.14335C10.7364 9.25459 10.6268 9.33987 10.4998 9.38813L7.667 10.4775C7.60991 10.4996 7.55807 10.5333 7.5148 10.5766C7.47152 10.6199 7.43777 10.6717 7.41571 10.7288L6.32551 13.5624C6.27631 13.6916 6.18884 13.8028 6.0748 13.8809C5.96076 13.9591 5.82557 14.0006 5.68731 13.9999Z" fill="currentColor"/>
        <path d="M2.40654 4.8136C2.32547 4.81359 2.2463 4.78903 2.17947 4.74314C2.11264 4.69725 2.06128 4.63219 2.03215 4.55653L1.57107 3.35761C1.56108 3.33139 1.54565 3.30758 1.52581 3.28773C1.50597 3.26789 1.48216 3.25247 1.45594 3.24248L0.257016 2.78139C0.181367 2.75226 0.116317 2.7009 0.0704375 2.63407C0.0245576 2.56723 0 2.48807 0 2.40701C0 2.32594 0.0245576 2.24678 0.0704375 2.17995C0.116317 2.11311 0.181367 2.06175 0.257016 2.03262L1.45594 1.57153C1.48213 1.5615 1.50592 1.54606 1.52576 1.52622C1.54559 1.50638 1.56103 1.4826 1.57107 1.4564L2.02805 0.268146C2.05382 0.198191 2.09817 0.136582 2.15633 0.0899404C2.21449 0.0432984 2.28426 0.013387 2.35814 0.00342089C2.44684 -0.00736223 2.5366 0.0117753 2.61319 0.0577987C2.68978 0.103822 2.74881 0.174097 2.78093 0.257481L3.24201 1.4564C3.25205 1.4826 3.26749 1.50638 3.28733 1.52622C3.30716 1.54606 3.33095 1.5615 3.35715 1.57153L4.55607 2.03262C4.63172 2.06175 4.69677 2.11311 4.74265 2.17995C4.78853 2.24678 4.81308 2.32594 4.81308 2.40701C4.81308 2.48807 4.78853 2.56723 4.74265 2.63407C4.69677 2.7009 4.63172 2.75226 4.55607 2.78139L3.35715 3.24248C3.33093 3.25247 3.30711 3.26789 3.28727 3.28773C3.26743 3.30758 3.25201 3.33139 3.24201 3.35761L2.78093 4.55653C2.75181 4.63219 2.70045 4.69725 2.63361 4.74314C2.56678 4.78903 2.48761 4.81359 2.40654 4.8136Z" fill="currentColor"/>
        <path d="M10.9365 6.99968C10.8481 6.99965 10.7618 6.97283 10.6889 6.92274C10.616 6.87266 10.56 6.80167 10.5283 6.71913L9.90377 5.09573C9.89278 5.06712 9.87591 5.04115 9.85424 5.01948C9.83257 4.99781 9.80659 4.98094 9.77798 4.96995L8.15459 4.34542C8.07211 4.31364 8.00119 4.25762 7.95118 4.18475C7.90116 4.11188 7.87439 4.02556 7.87439 3.93718C7.87439 3.84879 7.90116 3.76247 7.95118 3.6896C8.00119 3.61673 8.07211 3.56071 8.15459 3.52893L9.77798 2.9044C9.80659 2.89342 9.83257 2.87654 9.85424 2.85487C9.87591 2.83321 9.89278 2.80723 9.90377 2.77862L10.5236 1.16671C10.5519 1.09048 10.6004 1.02335 10.6638 0.972458C10.7272 0.921565 10.8032 0.888812 10.8838 0.877683C10.9805 0.865968 11.0785 0.886912 11.162 0.937193C11.2455 0.987474 11.3098 1.06421 11.3448 1.15522L11.9693 2.77862C11.9803 2.80723 11.9972 2.83321 12.0188 2.85487C12.0405 2.87654 12.0665 2.89342 12.0951 2.9044L13.7185 3.52893C13.801 3.56071 13.8719 3.61673 13.9219 3.6896C13.9719 3.76247 13.9987 3.84879 13.9987 3.93718C13.9987 4.02556 13.9719 4.11188 13.9219 4.18475C13.8719 4.25762 13.801 4.31364 13.7185 4.34542L12.0951 4.96995C12.0665 4.98094 12.0405 4.99781 12.0188 5.01948C11.9972 5.04115 11.9803 5.06712 11.9693 5.09573L11.3448 6.71913C11.3131 6.80167 11.2571 6.87266 11.1842 6.92274C11.1113 6.97283 11.025 6.99965 10.9365 6.99968Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_4026_161">
          <rect width="14" height="14" fill="currentColor"/>
        </clipPath>
      </defs>
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.50119 11.0041H4.50047C3.70454 11.0041 2.9412 10.6879 2.37839 10.1251C1.81557 9.56231 1.49939 8.79897 1.49939 8.00303C1.49939 7.2071 1.81557 6.44376 2.37839 5.88095C2.9412 5.31814 3.70454 5.00195 4.50047 5.00195H6.50119" stroke="currentColor" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.50134 5.00195H11.5021C12.298 5.00195 13.0613 5.31814 13.6241 5.88095C14.187 6.44376 14.5031 7.2071 14.5031 8.00303C14.5031 8.79897 14.187 9.56231 13.6241 10.1251C13.0613 10.6879 12.298 11.0041 11.5021 11.0041H9.50134" stroke="currentColor" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.10425 8.00195H10.9632" stroke="currentColor" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const titleId = useId()
  const [copied, setCopied] = useState(false)

  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (!project) return
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [project, handleEscape])

  useEffect(() => {
    if (!project) setCopied(false)
  }, [project])

  if (!project) return null

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(project!.link)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-foreground/10 bg-background p-6 shadow-xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="relative h-full min-h-[240px] overflow-hidden rounded-lg border border-foreground/10">
            <Image
              src={project.image}
              alt={`Captura do projeto ${project.title}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col">
            <h3 id={titleId} className="text-xl font-bold text-[#0C111D] sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
              {project.description}
            </p>

            <div className="mt-6">
              <p className="text-sm font-bold text-[#0C111D]">Tecnologias</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tecnologias do projeto">
                {project.techs.map((tech) => {
                  const color = getTechColor(tech)
                  return (
                    <li key={tech}>
                      <span
                        className={`inline-flex rounded-md px-3 py-1.5 text-xs font-medium ${skillTextClass(color)}`}
                        style={{ backgroundColor: color }}
                      >
                        {tech}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="mt-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
                <input
                  type="text"
                  readOnly
                  value={project.link}
                  disabled
                  className="min-w-0 flex-1 rounded-lg border border-foreground/20 bg-background px-3 py-2.5 text-sm text-foreground/80"
                  aria-label="Link do projeto"
                />
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-foreground/20 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                >
                  <LinkIcon />
                  {copied ? "Copiado!" : "Copiar link"}
                </button>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-[#0C111D] bg-background px-4 py-3 text-sm font-medium text-[#0C111D] transition-colors hover:bg-foreground/5 cursor-pointer"
              >
                Fechar
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0C111D] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Visualizar
                <SparkleIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

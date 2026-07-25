"use client"

import { useState } from "react"

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { PROJECTS, type Project } from "@/constants/projects"

import { ProjectCard } from "./projects/ProjectCard"
import { ProjectModal } from "./projects/ProjectModal"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#FFFFFF] px-4 py-16 font-sans sm:px-6 sm:py-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <SectionTitle id="projects-heading">Projetos</SectionTitle>
        </AnimateOnScroll>

        {PROJECTS.length > 0 ? (
          <ul className="mt-10 grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((project, index) => (
              <li key={project.id}>
                <AnimateOnScroll delay={index * 80}>
                  <ProjectCard project={project} onExpand={setSelectedProject} />
                </AnimateOnScroll>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-center text-sm text-foreground/60">
            Nenhum projeto cadastrado.
          </p>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

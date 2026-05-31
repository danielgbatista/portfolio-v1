import type { Skill } from "@/constants/skills"

import { Card } from "@/components/ui/Card"

type SkillsCardProps = {
  skills: Skill[]
}

export function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <Card>
      <h3 className="text-base font-bold text-foreground">Habilidades</h3>
      {skills.length > 0 ? (
        <div className="mt-4 max-h-45 overflow-y-auto overscroll-y-contain pr-1">
          <ul className="flex flex-wrap gap-x-1.5 gap-y-1.5" aria-label="Lista de tecnologias">
            {skills.map((skill) => (
              <li key={skill.id}>
                <span
                  className="inline-flex rounded-sm px-[.75rem] py-[.5rem] text-xs font-medium text-white"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-sm text-foreground/60">Nenhuma habilidade cadastrada.</p>
      )}
    </Card>
  )
}

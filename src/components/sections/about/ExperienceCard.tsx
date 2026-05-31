import type { Experience } from "@/constants/experience"

import { Card } from "@/components/ui/Card"

type ExperienceCardProps = {
  items: Experience[]
}

export function ExperienceCard({ items }: ExperienceCardProps) {
  return (
    <Card>
      <h3 className="text-base font-bold text-foreground">Experiência</h3>
      {items.length > 0 ? (
        <ul className="mt-4 space-y-5">
          {items.map((item) => (
            <li key={`${item.role}-${item.period}`}>
              <div className="flex items-start justify-between gap-3">
                <p className="min-w-0 font-medium text-[.875rem] text-[#0C111D] leading-snug">{item.role}</p>
                <p className="shrink-0 text-[.875rem] text-[#0C111D]">{item.period}</p>
              </div>
              <p className="mt-1 text-[.875rem] text-[#0C111D]">{item.company}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-foreground/60">Nenhuma experiência cadastrada.</p>
      )}
    </Card>
  )
}

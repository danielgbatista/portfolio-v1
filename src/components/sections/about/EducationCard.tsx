import type { Education } from "@/constants/education"

import { Card } from "@/components/ui/Card"

type EducationCardProps = {
  items: Education[]
}

export function EducationCard({ items }: EducationCardProps) {
  return (
    <Card>
      <h3 className="text-base font-bold text-[#0C111D]">Educação</h3>
      {items.length > 0 ? (
        <ul className="mt-4 space-y-5">
          {items.map((item) => (
            <li key={`${item.course}-${item.period}`}>
              <div className="flex items-start justify-between gap-3">
                <p className="min-w-0 font-medium text-[.875rem] text-[#0C111D] leading-snug">{item.course}</p>
                <p className="shrink-0 text-[.875rem] text-[#0C111D]">{item.period}</p>
              </div>
              <p className="text-[.875rem] text-[#0C111D]">{item.institution}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-foreground/60">Nenhuma formação cadastrada.</p>
      )}
    </Card>
  )
}

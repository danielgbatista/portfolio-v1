import { Card } from "@/components/ui/Card"

type SummaryCardProps = {
  description: string
}

export function SummaryCard({ description }: SummaryCardProps) {
  return (
    <Card>
      <h3 className="text-base font-bold text-foreground">Resumo</h3>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/85 sm:text-[15px]">
        {description}
      </p>
    </Card>
  )
}

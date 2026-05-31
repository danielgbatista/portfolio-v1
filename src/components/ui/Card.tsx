type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={`rounded-lg border border-[#C3C3C3] bg-background p-[1.25rem] ${className ? ` ${className}` : ""}`}
    >
      {children}
    </article>
  )
}

type SectionTitleProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ id, children, className }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4">
      <h2
        id={id}
        className={`shrink-0 text-[1.25rem] font-semibold tracking-tight text-foreground sm:text-2xl${className ? ` ${className}` : ""}`}
      >
        {children}
      </h2>
      <div className="h-px min-w-0 flex-1 bg-foreground/15" aria-hidden />
    </div>
  )
}

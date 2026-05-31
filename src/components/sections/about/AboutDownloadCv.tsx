import { DownloadIcon } from "./AboutIcons"

type AboutDownloadCvProps = {
  pdfHref?: string
  docxHref?: string
}

export function AboutDownloadCv({
  pdfHref = "/assets/files/curriculo.pdf"
}: AboutDownloadCvProps) {
  const linkClass =
    "inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/30"

  return (
    <div className="mt-12 flex flex-col items-center">
      <p className="text-base font-bold text-foreground">Download CV</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <a href={pdfHref} download className={linkClass}>
          <DownloadIcon />
          Baixar PDF
        </a>
        {/* <a href={docxHref} download className={linkClass}>
          <DownloadIcon />
          Baixar DOCX
        </a> */}
      </div>
    </div>
  )
}

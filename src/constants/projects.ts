export type Project = {
  id: number
  title: string
  description: string
  image: string
  link: string
  techs: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Santa Mônica",
    description: "O app oficial do Hospital Santa Mônica foi desenvolvido para oferecer mais tranquilidade, segurança e praticidade a pacientes e familiares durante o processo de cuidado e tratamento. Com ele, você pode acompanhar informações essenciais de forma rápida e organizada, além de acessar serviços que facilitam toda a jornada dentro e fora do hospital.",
    image: "https://iili.io/C3Udni7.md.png",
    link: "https://play.google.com/store/apps/details?id=com.alphacode.hospitalsantamonica&hl=pt_BR",
    techs: ["PHP", "Ionic", "MySQL", "Angular", "TypeScript"],
  }
]

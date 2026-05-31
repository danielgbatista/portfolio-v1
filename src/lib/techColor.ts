import { SKILLS } from "@/constants/skills"

const EXTRA_TECH_COLORS: Record<string, string> = {
  "Tailwind CSS": "#06B6D4",
  ESLint: "#4B32C3",
  "Material UI": "#6750A4",
}

export function getTechColor(name: string): string {
  const fromSkills = SKILLS.find(
    (skill) => skill.name.toLowerCase() === name.toLowerCase(),
  )
  if (fromSkills) return fromSkills.color
  return EXTRA_TECH_COLORS[name] ?? "#64748B"
}

export function skillTextClass(color: string) {
  return ["#F7DF1E", "#61DAFB"].includes(color) ? "text-black" : "text-white"
}

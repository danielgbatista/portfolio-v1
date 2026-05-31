import { SectionTitle } from "@/components/ui/SectionTitle";
import { EDUCATION } from "@/constants/education";
import { EXPERIENCES } from "@/constants/experience";
import { PROFILE } from "@/constants/profile";
import { SKILLS } from "@/constants/skills";

import { AboutDownloadCv } from "./about/AboutDownloadCv";
import { EducationCard } from "./about/EducationCard";
import { ExperienceCard } from "./about/ExperienceCard";
import { ProfileCard } from "./about/ProfileCard";
import { SkillsCard } from "./about/SkillsCard";
import { SummaryCard } from "./about/SummaryCard";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#FFFFFF] font-sans"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle id="about-heading">Sobre Mim</SectionTitle>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <ProfileCard
            displayShortName={PROFILE.displayShortName}
            tagline={PROFILE.tagline}
            projectsCount={PROFILE.projectsCount}
            experienceYears={PROFILE.experienceYears}
          />
          <SummaryCard description={PROFILE.description} />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <SkillsCard skills={SKILLS} />
          <EducationCard items={EDUCATION} />
          <ExperienceCard items={EXPERIENCES} />
        </div>

        <AboutDownloadCv />
      </div>
    </section>
  );
}

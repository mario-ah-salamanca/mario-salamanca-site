import { AudiencePathsSection } from "@/components/sections/audience-paths-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CredibilitySection } from "@/components/sections/credibility-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PersonalStorySection } from "@/components/sections/personal-story-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechnicalTeamSection } from "@/components/sections/technical-team-section";
import { WorkSection } from "@/components/sections/work-section";
import { SiteShell } from "@/components/layouts/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <AudiencePathsSection />
      <WorkSection />
      <CredibilitySection />
      <TechnicalTeamSection />
      <ServicesSection />
      <PersonalStorySection />
      <ContactSection />
    </SiteShell>
  );
}

import { BuildLogPreviewSection } from "@/components/sections/build-log-preview-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CredibilitySection } from "@/components/sections/credibility-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PersonalStorySection } from "@/components/sections/personal-story-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorkSection } from "@/components/sections/work-section";
import { SiteShell } from "@/components/layouts/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <CredibilitySection />
      <ServicesSection />
      <WorkSection />
      <ResourcesSection />
      <BuildLogPreviewSection />
      <PersonalStorySection />
      <ContactSection />
    </SiteShell>
  );
}

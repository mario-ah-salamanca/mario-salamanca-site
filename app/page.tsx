import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorkSection } from "@/components/sections/work-section";
import { SiteShell } from "@/components/layouts/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ServicesSection />
      <MetricsSection />
      <WorkSection />
      <ContactSection />
    </SiteShell>
  );
}

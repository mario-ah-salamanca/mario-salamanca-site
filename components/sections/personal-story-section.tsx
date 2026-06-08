import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function PersonalStorySection() {
  return (
    <section
      aria-labelledby="about"
      className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-16 md:pb-24"
    >
      <div className="glass-panel rounded-[8px] p-6 md:p-10">
        <SectionHeading
          id="about"
          title="Building a life around systems, creativity, and independence."
        />
        <div className="grid gap-5 text-base leading-7 text-[var(--color-muted)] md:grid-cols-2 md:text-lg md:leading-8">
          <p>
            {"I'm originally from El Salvador and now based in Germany. My path has moved through Computer Science, software engineering, systems thinking, language learning, music, and the ambition to build a more independent creative life."}
          </p>
          <p>
            {"I'm interested in the space between technology, structure, creativity, and execution."}
          </p>
        </div>
        <Button className="mt-8 w-full md:w-fit" href="#about" variant="secondary">
          Read the full story
        </Button>
      </div>
    </section>
  );
}

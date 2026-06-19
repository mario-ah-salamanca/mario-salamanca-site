import { expect, test } from "@playwright/test";

const caseStudies = [
  ["Aerospace Test Tooling Experience", "aerospace-test-tooling"],
  ["Industrial HMI & CAN Communication", "industrial-hmi-can-communication"],
  ["Data Model & ETL Tooling", "data-model-etl-tooling"],
  ["AI-Ready Documentation Kit", "ai-ready-documentation-kit"],
  ["Nocturne Personal Website System", "personal-website-system"],
] as const;

test.describe("selected work", () => {
  test("lists each published case study and links to its static route", async ({ page }) => {
    await page.goto("/work");

    await expect(
      page.getByRole("heading", {
        name: "Engineering work, explained with the context that matters.",
      }),
    ).toBeVisible();
    const navigation = page.getByRole("navigation", { name: "Main navigation" });
    await expect(navigation.getByRole("link", { name: "Technical Strengths" })).toHaveAttribute(
      "href",
      "/#credibility",
    );
    await expect(navigation.getByRole("link", { name: "Work With Me" })).toHaveAttribute(
      "href",
      "/#services",
    );

    for (const [title, slug] of caseStudies) {
      const card = page.locator("article").filter({ hasText: title });

      await expect(card.getByRole("heading", { name: title })).toBeVisible();
      await expect(card.getByRole("link", { name: "Read case study" })).toHaveAttribute(
        "href",
        new RegExp(`/work/${slug}/?$`),
      );
    }
  });

  for (const [title, slug] of caseStudies) {
    test(`renders ${title} with the full case-study structure`, async ({ page }) => {
      await page.goto(`/work/${slug}`);

      await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();
      await expect(page).toHaveTitle(new RegExp(title));

      for (const heading of [
        "Context",
        "Problem",
        "Constraints",
        "My role",
        "Approach",
        "Architecture and workflow",
        "Technologies used",
        "Implementation highlights",
        "Result or current status",
        "What this work demonstrates",
        "What I would improve next",
      ]) {
        await expect(
          page.getByRole("heading", { exact: true, level: 2, name: heading }),
        ).toBeVisible();
      }

      await expect(page.getByRole("link", { name: "All work" })).toHaveAttribute(
        "href",
        /^\/work\/?$/,
      );
    });
  }
});

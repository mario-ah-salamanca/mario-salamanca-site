import { expect, test } from "@playwright/test";

test.describe("recruiter-facing resume", () => {
  test("provides an engineering profile, public links, and CV actions", async ({
    page,
  }) => {
    await page.goto("/resume");

    await expect(
      page.getByRole("heading", {
        name: "Systems-minded engineering for tools that need to hold up in use.",
      }),
    ).toBeVisible();
    await expect(page.getByText("I am open to software engineering roles")).toBeVisible();
    await expect(
      page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name: "Resume" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/CV/mario-salamanca-cv.pdf",
    );
    await expect(page.getByRole("link", { name: "Open PDF" })).toHaveAttribute(
      "target",
      "_blank",
    );
    const professionalLinks = page.getByRole("complementary");

    await expect(
      professionalLinks.getByRole("link", { name: "GitHub" }),
    ).toHaveAttribute("href", "https://github.com/mario-ah-salamanca");
    await expect(
      professionalLinks.getByRole("link", { name: "Discuss a role" }),
    ).toHaveAttribute("href", "/#contact");
  });
});

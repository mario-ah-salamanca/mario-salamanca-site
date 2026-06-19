import { expect, type Page, test } from "@playwright/test";

async function expectHashTargetIsClearOfHeader(page: Page, hash: string) {
  await page.goto(`/${hash}`);

  const target = page.locator(hash);
  await expect(target).toBeVisible();

  const [headerBottom, targetTop] = await Promise.all([
    page.locator("header").evaluate((element) => element.getBoundingClientRect().bottom),
    target.evaluate((element) => element.getBoundingClientRect().top),
  ]);

  expect(targetTop).toBeGreaterThanOrEqual(headerBottom + 12);
}

test.describe("homepage paths and hash navigation", () => {
  test("routes hero visitors to the resume and project paths", async ({ page }) => {
    await page.goto("/");

    const hero = page.locator("main > section").first();
    await expect(
      hero.getByRole("heading", {
        name: "Software engineer building reliable tools, workflows, and digital systems.",
      }),
    ).toBeVisible();
    await expect(hero.getByRole("link", { name: "View resume" })).toHaveAttribute(
      "href",
      /^\/resume\/?$/,
    );

    await hero.getByRole("link", { name: "Start a project" }).click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("keeps desktop hash targets below the fixed header", async ({ page }) => {
    await expectHashTargetIsClearOfHeader(page, "#work");
    await expectHashTargetIsClearOfHeader(page, "#contact");
  });

  test("keeps mobile hash targets below the fixed header", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    await expectHashTargetIsClearOfHeader(page, "#work");
    await expectHashTargetIsClearOfHeader(page, "#contact");
  });
});

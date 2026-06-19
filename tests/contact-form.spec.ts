import { expect, type Page, test } from "@playwright/test";

const formEndpoint = "https://formspree.io/f/xlgknwgg";

async function fillContactForm(
  page: Page,
  inquiry: "Job opportunity" | "Freelance project" | "Collaboration" | "General message",
) {
  const contact = page.locator("#contact");

  await contact.getByLabel("Name").fill("Codex QA");
  await contact.getByLabel("Email").fill("codex-qa@example.com");
  await contact
    .getByLabel("What are you reaching out about?")
    .selectOption({ label: inquiry });
  await contact
    .getByLabel("Message", { exact: true })
    .fill("Testing the contact form submission path.");
}

async function openContactForm(page: Page) {
  await page.goto("/#contact");
  await expect(page.locator("#contact form")).toHaveAttribute(
    "data-enhanced",
    "true",
  );
}

test.describe("contact form", () => {
  test("shows the configured scheduling call entry point", async ({ page }) => {
    await openContactForm(page);

    const schedulingLink = page
      .locator("#contact")
      .getByRole("link", { name: "Schedule a call" });

    await expect(page.getByText("Prefer to talk it through?")).toBeVisible();
    await expect(schedulingLink).toBeVisible();
    await expect(schedulingLink).toHaveAttribute(
      "href",
      "https://calendar.app.google/gRRfovW9wqWXXQJE9",
    );
    await expect(schedulingLink).toHaveAttribute("target", "_blank");
  });

  test("shows the in-page success state when Formspree accepts AJAX", async ({
    page,
  }) => {
    await page.route(formEndpoint, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true }),
      });
    });

    await openContactForm(page);
    await fillContactForm(page, "General message");
    await page.getByRole("button", { name: "Send inquiry" }).click();

    await expect(
      page.getByText(
        "Inquiry sent. I'll review the context and reply with the next clear step.",
      ),
    ).toBeVisible();
    await expect(page.locator("#contact").getByLabel("Name")).toHaveValue("");
  });

  test("reveals only the selected job fields", async ({ page }) => {
    await openContactForm(page);

    const contact = page.locator("#contact");
    await contact
      .getByLabel("What are you reaching out about?")
      .selectOption({ label: "Job opportunity" });

    await expect(contact.getByRole("group", { name: "Role details (optional)" })).toBeVisible();
    await expect(contact.getByLabel("Company")).toBeVisible();
    await expect(contact.getByLabel("Role title")).toBeVisible();
    await expect(contact.getByLabel("Job link")).toBeVisible();
    await expect(contact.getByLabel("Project type")).toHaveCount(0);
  });

  test("reveals only the selected freelance project fields", async ({ page }) => {
    await openContactForm(page);

    const contact = page.locator("#contact");
    await contact
      .getByLabel("What are you reaching out about?")
      .selectOption({ label: "Freelance project" });

    await expect(
      contact.getByRole("group", { name: "Project details (optional)" }),
    ).toBeVisible();
    await expect(contact.getByLabel("Project type")).toBeVisible();
    await expect(contact.getByLabel("Budget range")).toBeVisible();
    await expect(contact.getByLabel("Main goal")).toBeVisible();
    await expect(contact.getByLabel("Company")).toHaveCount(0);
  });

  test("falls back to native Formspree POST when AJAX is blocked", async ({
    page,
  }) => {
    let formspreeCalls = 0;
    let fallbackPostBody: string | null = null;

    await page.route(formEndpoint, async (route) => {
      formspreeCalls += 1;

      if (formspreeCalls === 1) {
        await route.fulfill({
          status: 403,
          contentType: "application/json",
          body: JSON.stringify({
            error:
              "In order to submit via AJAX, you need to set a custom key or reCAPTCHA must be disabled in this form's settings page.",
          }),
        });
        return;
      }

      fallbackPostBody = route.request().postData();
      await new Promise((resolve) => setTimeout(resolve, 100));
      await route.fulfill({
        status: 200,
        contentType: "text/html",
        body: "<!doctype html><title>Formspree fallback reached</title><main>Formspree fallback reached</main>",
      });
    });

    await openContactForm(page);
    await fillContactForm(page, "Job opportunity");
    await page.locator("#contact").getByLabel("Company").fill("Example GmbH");
    await page
      .locator("#contact")
      .getByLabel("Role title")
      .fill("Software Engineer");
    await page.getByRole("button", { name: "Send inquiry" }).click();

    await expect(
      page.getByText(
        "Opening Formspree's verification step so your message can be protected from spam.",
      ),
    ).toBeVisible();
    await expect(page).toHaveTitle(/Formspree fallback reached/);
    await expect(page.getByText("Formspree fallback reached")).toBeVisible();
    expect(formspreeCalls).toBe(2);
    expect(fallbackPostBody).toContain("name=Codex+QA");
    expect(fallbackPostBody).toContain("email=codex-qa%40example.com");
    expect(fallbackPostBody).toContain("inquiryType=job");
    expect(fallbackPostBody).toContain("jobCompany=Example+GmbH");
    expect(fallbackPostBody).toContain("jobRoleTitle=Software+Engineer");
    expect(fallbackPostBody).not.toContain("projectType=");
    expect(fallbackPostBody).toContain("message=Testing+the+contact+form+submission+path.");
  });
});

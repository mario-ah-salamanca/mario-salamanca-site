import { expect, type Page, test } from "@playwright/test";

const formEndpoint = "https://formspree.io/f/xlgknwgg";

async function fillContactForm(page: Page) {
  const contact = page.locator("#contact");

  await contact.getByLabel("Name").fill("Codex QA");
  await contact.getByLabel("Email").fill("codex-qa@example.com");
  await contact.getByLabel("Project type").selectOption({ label: "Other" });
  await contact
    .getByLabel("Message")
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
    await fillContactForm(page);
    await page.getByRole("button", { name: "Send the messy version" }).click();

    await expect(
      page.getByText(
        "Message sent. I'll review the context and reply with the next clear step.",
      ),
    ).toBeVisible();
    await expect(page.locator("#contact").getByLabel("Name")).toHaveValue("");
  });

  test("falls back to native Formspree POST when AJAX is blocked", async ({
    page,
  }) => {
    let formspreeCalls = 0;

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

      await route.fulfill({
        status: 200,
        contentType: "text/html",
        body: "<!doctype html><title>Formspree fallback reached</title><main>Formspree fallback reached</main>",
      });
    });

    await openContactForm(page);
    await fillContactForm(page);
    await page.getByRole("button", { name: "Send the messy version" }).click();

    await expect(page).toHaveTitle(/Formspree fallback reached/);
    await expect(page.getByText("Formspree fallback reached")).toBeVisible();
    expect(formspreeCalls).toBe(2);
  });
});

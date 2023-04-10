// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://areena.yle.fi/tv');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Yle Areena – Enemmän kuin ehdit katsoa ja kuunnella | TV | Areena | yle.fi/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://areena.yle.fi/tv');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('luo yletunnus', async({page}) => {
  await page.goto('https://areena.yle.fi/tv');
  await page.getByRole('button', {name: 'Kirjaudu'}).click();

 
})

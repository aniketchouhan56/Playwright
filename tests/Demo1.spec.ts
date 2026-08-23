import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step('Login to the application', async () => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
  });

  await test.step('Enter Username & Password', async () => {
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  });

  await test.step('click on login button', async () => {
    await page.getByRole('button', { name: 'Submit' }).click();
  });

  await test.step('VALIDATE THE LOGIN TEXT', async () => {
    await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  });

  await test.step('LOG OUT & VALIDATE', async () => {
    await page.getByRole('link', { name: 'Log out' }).click();
    await expect(page.locator('h2')).toContainText('Test login');
  });


});
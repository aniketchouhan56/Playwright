import { test, expect } from '@playwright/test';

test('Verify hammer availability', async ({ page }) => {
    await test.step('Navigate to the application', async () => {
        await page.goto('https://practicesoftwaretesting.com/');
    });

    await test.step('Click on signin ', async () => {
        await page.locator('[data-test="nav-sign-in"]').click();
    });

    await test.step('Verify sign in page', async () => {
        await page.getByRole('heading', { name: 'Login' })
    });

    await test.step('Enter Email address', async () => {
        await page.locator('[data-test="email"]').fill('admin@practicesoftwaretesting.com');
    });
    await test.step('Enter password ', async () => {
        await page.locator('[data-test="password"]').fill('welcome01');
    });
    await test.step('Click on Login Button', async () => {
        await page.locator('[data-test="login-submit"]').click();
    });

});
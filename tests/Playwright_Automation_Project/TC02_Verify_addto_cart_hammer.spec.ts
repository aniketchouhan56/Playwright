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




    // Verify hammer availability
    await test.step('Click on home ', async () => {
        await page.locator('[data-test="nav-home"]').click();
    });
    // await test.step('Click category', async () => {
    /////     await page.getByRole('heading', { name: 'By category:' }).click();
    // });
    //await test.step('Click oh hammer check box', async () => {
    //     await page.locator('[data-test="category-01M138D8R32G0Y7QNY2NH06V7A"]').check();
    // });
    await test.step('select Hammer', async () => {
        const element = page.locator("//*[@data-test='product-01M18QG96A5QG6CVPV88BB0NXF']");
        await element.scrollIntoViewIfNeeded();
        await element.click();
    });
    await test.step('Add the quantity', async () => {
        await page.locator('[data-test="increase-quantity"]').click();
    });


    await test.step('Click add to cart', async () => {
        await page.locator('[data-test="add-to-cart"]').click();
    });

    await test.step('Click on cart icon ', async () => {

        await page.locator('[data-test="nav-cart"]').click();
    });
    await test.step('Verify the correct product added in cart', async () => {
        await expect(page.locator('[data-test="product-title"]')).toContainText('Hammer');
    });



});
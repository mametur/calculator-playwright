// tests/calculator.spec.js
import { test, expect } from '@playwright/test';

test.describe('Calculator E2E', () => {
  test('should perform a full calculation with correct order of operations', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Make sure your React app is running

    // Simulate user input: 8 + 2 * 5 =
    await page.locator('[data-testid="btn-8"]').click();
    await page.locator('[data-testid="btn-+"]').click();
    await page.locator('[data-testid="btn-2"]').click();
    await page.locator('[data-testid="btn-*"]').click();
    await page.locator('[data-testid="btn-5"]').click();
    await page.locator('[data-testid="btn-="]').click();

    // Assert the result (should be 18)
    await expect(page.locator('[data-testid="display"]')).toHaveText('10');

    // Reset the calculator
    await page.locator('[data-testid="btn-AC"]').click();

    // Simulate user input: 8 * 2 + 5 =
    await page.locator('[data-testid="btn-8"]').click();
    await page.locator('[data-testid="btn-*"]').click();
    await page.locator('[data-testid="btn-2"]').click();
    await page.locator('[data-testid="btn-+"]').click();
    await page.locator('[data-testid="btn-5"]').click();
    await page.locator('[data-testid="btn-="]').click();

    // Assert the result (should be 21)
    await expect(page.locator('[data-testid="display"]')).toHaveText('7');
  });
});

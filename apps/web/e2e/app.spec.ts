import { test, expect } from '@playwright/test';

test('redirects to setup when not configured', async ({ page }) => {
  await page.goto('/');
  // Should redirect to /setup since setup_complete is false in test DB
  await expect(page).toHaveURL(/\/setup/);
});

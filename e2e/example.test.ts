import { test, expect } from '@playwright/test'

test('basic test', async ({ page, baseURL }) => {
  await page.goto(baseURL)
  await expect(page).toHaveTitle(/react/i)
})

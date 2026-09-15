import { readFileSync } from 'fs'
import { test, expect } from '@playwright/test'

// The published config uses the GitHub backend, which needs a token. Swap in the test
// backend, seeded with the committed content, so the editor opens unauthenticated.
const testConfig = () => {
  const config = readFileSync('public/admin/config.yml', 'utf8')
    .replace(/backend:\n(?: {2}.*\n)+/, 'backend:\n  name: test-repo\n')

  return ['projects', 'skills', 'education'].reduce((yaml, name) => {
    const content = JSON.parse(readFileSync(`public/json/${name}.json`, 'utf8'))
    // Flow-style JSON is valid YAML, so the committed content can be inlined as a default.
    return yaml.replace(`\n    - name: ${name}\n`, `\n    - name: ${name}\n      default: ${JSON.stringify(content)}\n`)
  }, config)
}

// The CMS editor drops the preview pane at phone width; the admin is a desktop tool.
test.skip(({ isMobile }) => isMobile, 'The editor has no preview pane on mobile')

test.beforeEach(async ({ page }) => {
  await page.route('**/admin/config.yml*', route =>
    route.fulfill({ body: testConfig(), contentType: 'text/yaml' }))
  await page.goto('/admin/')
  await page.getByText('Work with Test Repository').click()
})

test('preview renders the portfolio and follows unsaved edits', async ({ page }) => {
  await page.goto('/admin/#/collections/portfolio/entries/projects')

  const preview = page.frameLocator('iframe[title="Content Preview"]')
  await expect(preview.getByRole('heading', { name: 'Cristiano Faustino' }))
    .toBeVisible({ timeout: 30000 })
  await expect(preview.getByText('Giftbit: Senior Software Developer')).toBeVisible()

  // Entries in a file collection have no slug; a regression there silently leaves the
  // preview showing committed content instead of the draft.
  await page.getByRole('button', { name: 'Expand' }).first().click()
  await page.getByLabel('Title', { exact: true }).first().fill('Draft Title In Preview')

  await expect(preview.getByText('Draft Title In Preview')).toBeVisible()
  await expect(preview.getByText('Giftbit: Senior Software Developer')).toBeHidden()
})

for (const name of ['skills', 'education']) {
  test(`${name} preview renders the portfolio`, async ({ page }) => {
    await page.goto(`/admin/#/collections/portfolio/entries/${name}`)

    const preview = page.frameLocator('iframe[title="Content Preview"]')
    await expect(preview.getByRole('heading', { name: 'Cristiano Faustino' }))
      .toBeVisible({ timeout: 30000 })
  })
}

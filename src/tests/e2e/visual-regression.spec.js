import { test, expect } from '@playwright/test'

test.describe('Page Content Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('renders all main sections', async ({ page }) => {
    await expect(page.locator('header')).toContainText('Cristiano Faustino')
    await expect(page.getByText(/Brazilian Software Engineer/)).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Career' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible()

    const currentYear = new Date().getFullYear()
    await expect(page.locator('footer')).toContainText(`© ${currentYear}`)
  })

  test('renders header navigation with all links', async ({ page }) => {
    const header = page.locator('header')

    await expect(header.getByText(/Resume/)).toBeVisible()
    await expect(header.getByText('About')).toBeVisible()
    await expect(header.getByText('Career')).toBeVisible()
    await expect(header.getByText('Skills')).toBeVisible()
    await expect(header.getByText(/LinkedIn/)).toBeVisible()
  })

  test('renders contact section with profile image and social links', async ({ page }) => {
    await expect(page.getByAltText('Cristiano Faustino')).toBeVisible()
    await expect(page.getByText(/Senior Software Developer at Giftbit/)).toBeVisible()
    await expect(page.getByRole('link', { name: 'Facebook' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible()
  })

  test('external links have security attributes', async ({ page }) => {
    const externalLinks = page.locator('a[target="_blank"]')
    const count = await externalLinks.count()

    for (let i = 0; i < count; i++) {
      await expect(externalLinks.nth(i)).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  test('navigation links scroll to correct sections', async ({ page }) => {
    const header = page.locator('header')

    await header.getByText('Career').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('#career')).toBeInViewport()

    await header.getByText('Skills').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('#skills')).toBeInViewport()

    await header.getByText('About').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('#about')).toBeInViewport()
  })

  test('contact bar is visible with contact info', async ({ page }) => {
    const contactBar = page.locator('.contact-bar')
    await expect(contactBar).toBeVisible()
    await expect(contactBar.getByRole('link', { name: 'cristiadu@gmail.com' })).toBeVisible()
    await expect(contactBar.getByText(/Victoria, British Columbia/)).toBeVisible()
  })
})

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('header.masthead').waitFor({ state: 'visible' })
    await page.waitForTimeout(300)
  })

  test('full page screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015 // allow small diff for date
    })
  })

  test('header navigation', async ({ page }) => {
    const masthead = page.locator('header.masthead')
    await expect(masthead).toHaveScreenshot('header-nav.png', {
      maxDiffPixelRatio: 0.015
    })
  })

  test('about me section', async ({ page }) => {
    const aboutSection = page.locator('article.lead-story')
    await aboutSection.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('about-me-section.png', {
      fullPage: false,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015
    })
  })

  test('projects section', async ({ page }) => {
    const career = page.locator('#career')
    await career.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('projects-section.png', {
      fullPage: false,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015
    })
  })

  test('skills section', async ({ page }) => {
    const skills = page.locator('#skills')
    await skills.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('skills-section.png', {
      fullPage: false,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015
    })
  })

  test('footer', async ({ page }) => {
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('footer.png', {
      fullPage: false,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015
    })
  })

  test('expanded project accordion', async ({ page }) => {
    const firstProject = page.locator('.archive-article').first()
    await firstProject.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('expanded-project.png', {
      fullPage: false,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015
    })
  })

  test('collapsed project accordion', async ({ page }) => {
    const firstProjectHeader = page.locator('.archive-header').first()
    await firstProjectHeader.click()
    await page.waitForTimeout(500)

    const firstProject = page.locator('.archive-article').first()
    await firstProject.scrollIntoViewIfNeeded()
    await expect(page).toHaveScreenshot('collapsed-project.png', {
      fullPage: false,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015
    })
  })
})

test.describe('Responsive Layout Tests', () => {
  test('tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('header.masthead').waitFor({ state: 'visible' })
    await page.waitForTimeout(300)

    await expect(page).toHaveScreenshot('tablet-layout.png', {
      fullPage: true,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015
    })
  })

  test('mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('header.masthead').waitFor({ state: 'visible' })
    await page.waitForTimeout(300)

    await expect(page).toHaveScreenshot('mobile-layout.png', {
      fullPage: true,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015
    })
  })

  test('mobile navigation wraps correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('header.masthead').waitFor({ state: 'visible' })
    await page.waitForTimeout(300)

    const nav = page.locator('nav.masthead-nav')
    await expect(nav).toBeVisible()
    await expect(page).toHaveScreenshot('mobile-menu-open.png', {
      fullPage: false,
      animations: 'disabled',
      maxDiffPixelRatio: 0.015
    })
  })
})

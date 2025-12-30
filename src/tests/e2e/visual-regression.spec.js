import { test, expect } from '@playwright/test'

test.describe('Page Content Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('renders all main sections', async ({ page }) => {
    await expect(page.locator('header')).toContainText('Cristiano Faustino')
    await expect(page.getByText('About Me')).toBeVisible()
    await expect(page.getByText('Contact Information')).toBeVisible()
    await expect(page.getByText('Jobs & Projects')).toBeVisible()
    await expect(page.getByText('Main Skills')).toBeVisible()

    const currentYear = new Date().getFullYear()
    await expect(page.locator('footer')).toContainText(`© ${currentYear}`)
  })

  test('renders header navigation with all links', async ({ page }) => {
    const header = page.locator('header')
    const menuToggle = header.locator('.navbar-toggler')

    if (await menuToggle.isVisible()) {
      await menuToggle.click()
      await page.locator('.navbar-collapse.show').waitFor({ state: 'visible' })
    }

    await expect(header.getByText(/Resume/)).toBeVisible()
    await expect(header.getByText(/Projects/)).toBeVisible()
    await expect(header.getByText(/Skills/)).toBeVisible()
    await expect(header.getByText(/LinkedIn/)).toBeVisible()
    await expect(header.getByText(/Contact/)).toBeVisible()
  })

  test('renders contact section with profile image and social links', async ({ page }) => {
    await expect(page.getByAltText('My Photo')).toBeVisible()
    await expect(page.getByText(/Cristiano de Oliveira Faustino/)).toBeVisible()
    await expect(page.getByRole('link', { name: 'Facebook' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Github' })).toBeVisible()
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
    const menuToggle = header.locator('.navbar-toggler')

    const clickNavLink = async (linkPattern) => {
      if (await menuToggle.isVisible()) {
        await menuToggle.click()
        await header.getByText(linkPattern).waitFor({ state: 'visible' })
      }
      await header.getByText(linkPattern).click()
      await page.waitForTimeout(1000)
    }

    await clickNavLink(/Projects/)
    await expect(page.locator('#projects')).toBeInViewport()

    await clickNavLink(/Skills/)
    await expect(page.locator('#skills')).toBeInViewport()

    await clickNavLink(/Contact/)
    await expect(page.locator('#contact')).toBeInViewport()
  })
})

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('nav.navbar').waitFor({ state: 'visible' })
    await page.waitForTimeout(300)
  })

  test('full page screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
      animations: 'disabled'
    })
  })

  test('header navigation', async ({ page }) => {
    const navbar = page.locator('nav.navbar')
    await expect(navbar).toHaveScreenshot('header-nav.png')
  })

  test('about me section', async ({ page }) => {
    const aboutMe = page.locator('.about-me')
    await aboutMe.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('about-me-section.png', {
      fullPage: false,
      animations: 'disabled'
    })
  })

  test('projects section', async ({ page }) => {
    const projects = page.locator('#projects')
    await projects.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('projects-section.png', {
      fullPage: false,
      animations: 'disabled'
    })
  })

  test('skills section', async ({ page }) => {
    const skills = page.locator('#skills')
    await skills.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('skills-section.png', {
      fullPage: false,
      animations: 'disabled'
    })
  })

  test('footer', async ({ page }) => {
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('footer.png', {
      fullPage: false,
      animations: 'disabled'
    })
  })

  test('expanded project accordion', async ({ page }) => {
    const firstProject = page.locator('.accordion .card').first()
    await firstProject.scrollIntoViewIfNeeded()
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('expanded-project.png', {
      fullPage: false,
      animations: 'disabled'
    })
  })

  test('collapsed project accordion', async ({ page }) => {
    const firstProjectHeader = page.locator('.accordion-button').first()
    await firstProjectHeader.click()
    await page.waitForTimeout(500)

    const firstProject = page.locator('.accordion .card').first()
    await firstProject.scrollIntoViewIfNeeded()
    await expect(page).toHaveScreenshot('collapsed-project.png', {
      fullPage: false,
      animations: 'disabled'
    })
  })
})

test.describe('Responsive Layout Tests', () => {
  test('tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('nav.navbar').waitFor({ state: 'visible' })
    await page.waitForTimeout(300)

    await expect(page).toHaveScreenshot('tablet-layout.png', {
      fullPage: true,
      animations: 'disabled'
    })
  })

  test('mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('nav.navbar').waitFor({ state: 'visible' })
    await page.waitForTimeout(300)

    await expect(page).toHaveScreenshot('mobile-layout.png', {
      fullPage: true,
      animations: 'disabled'
    })
  })

  test('mobile navigation menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.locator('nav.navbar').waitFor({ state: 'visible' })
    await page.waitForTimeout(300)

    const menuToggle = page.locator('.navbar-toggler')
    await menuToggle.click()
    await page.locator('.navbar-collapse.show').waitFor({ state: 'visible' })
    await page.waitForTimeout(300)

    await expect(page).toHaveScreenshot('mobile-menu-open.png', {
      fullPage: false,
      animations: 'disabled'
    })
  })
})


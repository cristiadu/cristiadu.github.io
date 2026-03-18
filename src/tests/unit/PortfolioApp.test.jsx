import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PortfolioApp from '@/PortfolioApp'

function MockHeaderNavBar() {
  return <header data-testid="header-navbar">Header</header>
}

function MockMainContent() {
  return <main data-testid="main-content">Main Content</main>
}

function MockFooter() {
  return <footer data-testid="footer">Footer</footer>
}

vi.mock('@/components/layout/HeaderNavBar', () => ({
  default: MockHeaderNavBar
}))

vi.mock('@/components/layout/MainContent', () => ({
  default: MockMainContent
}))

vi.mock('@/components/layout/Footer', () => ({
  default: MockFooter
}))

describe('PortfolioApp', () => {
  it('renders the header, main content, and footer', () => {
    render(<PortfolioApp />)

    expect(screen.getByTestId('header-navbar')).toBeInTheDocument()
    expect(screen.getByTestId('main-content')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})

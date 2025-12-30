import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PortfolioApp from '@/PortfolioApp'

vi.mock('@/components/layout/HeaderNavBar', () => ({
  default: function MockHeaderNavBar() {
    return <header data-testid="header-navbar">Header</header>
  }
}))

vi.mock('@/components/layout/MainContent', () => ({
  default: function MockMainContent() {
    return <main data-testid="main-content">Main Content</main>
  }
}))

vi.mock('@/components/layout/Footer', () => ({
  default: function MockFooter() {
    return <footer data-testid="footer">Footer</footer>
  }
}))

describe('PortfolioApp', () => {
  it('renders the header, main content, and footer', () => {
    render(<PortfolioApp />)

    expect(screen.getByTestId('header-navbar')).toBeInTheDocument()
    expect(screen.getByTestId('main-content')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})

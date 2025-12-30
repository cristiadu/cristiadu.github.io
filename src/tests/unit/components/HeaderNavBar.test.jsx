import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeaderNavBar from '@/components/layout/HeaderNavBar'

describe('HeaderNavBar', () => {
  it('renders the brand name with link to home', () => {
    render(<HeaderNavBar />)

    const brandLink = screen.getByRole('link', { name: 'Cristiano Faustino' })
    expect(brandLink).toBeInTheDocument()
    expect(brandLink).toHaveAttribute('href', 'index.html')
  })

  it('renders all navigation links', () => {
    render(<HeaderNavBar />)

    expect(screen.getByText(/Resume/)).toBeInTheDocument()
    expect(screen.getByText(/Projects/)).toBeInTheDocument()
    expect(screen.getByText(/Skills/)).toBeInTheDocument()
    expect(screen.getByText(/LinkedIn/)).toBeInTheDocument()
    expect(screen.getByText(/Contact/)).toBeInTheDocument()
  })

  it('renders external links with correct URLs and security attributes', () => {
    render(<HeaderNavBar />)

    const resumeLink = screen.getByRole('link', { name: /Resume/ })
    expect(resumeLink).toHaveAttribute('href', expect.stringContaining('drive.google.com'))
    expect(resumeLink).toHaveAttribute('target', '_blank')
    expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer')

    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/ })
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders internal scroll links as valid anchor elements', () => {
    render(<HeaderNavBar />)

    const projectsLink = screen.getByText(/Projects/).closest('a')
    expect(projectsLink).toBeInTheDocument()
    expect(projectsLink).not.toHaveAttribute('target', '_blank')
    expect(projectsLink).not.toHaveAttribute('href', expect.stringContaining('http'))

    const skillsLink = screen.getByText(/Skills/).closest('a')
    expect(skillsLink).toBeInTheDocument()
    expect(skillsLink).not.toHaveAttribute('target', '_blank')
    expect(skillsLink).not.toHaveAttribute('href', expect.stringContaining('http'))

    const contactLink = screen.getByText(/Contact/).closest('a')
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).not.toHaveAttribute('target', '_blank')
    expect(contactLink).not.toHaveAttribute('href', expect.stringContaining('http'))
  })

  it('renders navbar with fixed-top positioning', () => {
    render(<HeaderNavBar />)

    const navbar = screen.getByRole('navigation')
    expect(navbar).toHaveClass('fixed-top')
  })
})


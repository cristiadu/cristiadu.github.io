import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeaderNavBar from '@/components/layout/HeaderNavBar'

describe('HeaderNavBar', () => {
  it('renders the brand name as heading', () => {
    render(<HeaderNavBar />)

    const heading = screen.getByRole('heading', { name: 'Cristiano Faustino' })
    expect(heading).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<HeaderNavBar />)

    expect(screen.getByText('Senior Software Developer')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<HeaderNavBar />)

    expect(screen.getByText(/Resume/)).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Career')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText(/LinkedIn/)).toBeInTheDocument()
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

  it('renders masthead info bar', () => {
    render(<HeaderNavBar />)

    expect(screen.getByText('Software Developer Since 2010')).toBeInTheDocument()
  })

  it('renders navbar with masthead-nav class', () => {
    render(<HeaderNavBar />)

    const navbar = screen.getByRole('navigation')
    expect(navbar).toHaveClass('masthead-nav')
  })
})

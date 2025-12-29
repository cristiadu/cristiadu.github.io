import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '@/components/layout/Footer'

describe('Footer', () => {
  it('renders the copyright with current year', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument()
  })

  it('renders the email link', () => {
    render(<Footer />)

    const emailLink = screen.getByRole('link', { name: /cristiadu@gmail.com/i })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:cristiadu@gmail.com')
  })
})

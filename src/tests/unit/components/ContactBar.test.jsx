import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ContactBar from '@/components/ContactBar'

describe('ContactBar', () => {
  it('renders location', () => {
    render(<ContactBar />)

    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText(/Victoria, British Columbia, Canada/)).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<ContactBar />)

    expect(screen.getByText('Email')).toBeInTheDocument()
    const emailLink = screen.getByRole('link', { name: 'cristiadu@gmail.com' })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:cristiadu@gmail.com')
  })

  it('renders phone number', () => {
    render(<ContactBar />)

    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('+1 (250) 516-6800')).toBeInTheDocument()
  })

  it('renders social media links with correct URLs and security attributes', () => {
    render(<ContactBar />)

    expect(screen.getByText('Connect')).toBeInTheDocument()

    const facebookLink = screen.getByRole('link', { name: 'Facebook' })
    expect(facebookLink).toHaveAttribute('href', expect.stringContaining('facebook.com'))
    expect(facebookLink).toHaveAttribute('target', '_blank')
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer')

    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' })
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')

    const githubLink = screen.getByRole('link', { name: 'GitHub' })
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'))
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    const lastfmLink = screen.getByRole('link', { name: 'Last.fm' })
    expect(lastfmLink).toHaveAttribute('href', expect.stringContaining('last.fm'))
    expect(lastfmLink).toHaveAttribute('target', '_blank')
    expect(lastfmLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})

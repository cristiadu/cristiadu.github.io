import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from '@/components/Contact'

describe('Contact', () => {
  it('renders profile image', () => {
    render(<Contact />)

    const image = screen.getByAltText('My Photo')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'images/profile-pic.jpg')
  })

  it('renders About Me section', () => {
    render(<Contact />)

    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(/Senior Software Developer at Giftbit/)).toBeInTheDocument()
  })

  it('renders Contact Information section', () => {
    render(<Contact />)

    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText('Cristiano de Oliveira Faustino')).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<Contact />)

    const emailLink = screen.getByRole('link', { name: 'cristiadu@gmail.com' })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:cristiadu@gmail.com')
  })

  it('renders social media links with correct URLs and security attributes', () => {
    render(<Contact />)

    const facebookLink = screen.getByRole('link', { name: 'Facebook' })
    expect(facebookLink).toHaveAttribute('href', expect.stringContaining('facebook.com'))
    expect(facebookLink).toHaveAttribute('target', '_blank')
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer')

    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' })
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')

    const githubLink = screen.getByRole('link', { name: 'Github' })
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'))
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    const lastfmLink = screen.getByRole('link', { name: 'LastFM' })
    expect(lastfmLink).toHaveAttribute('href', expect.stringContaining('last.fm'))
    expect(lastfmLink).toHaveAttribute('target', '_blank')
    expect(lastfmLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})


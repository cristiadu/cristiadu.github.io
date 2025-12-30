import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Contact from '@/components/Contact'

vi.mock('@/components/EducationList', () => ({
  default: function MockEducationList() {
    return <div data-testid="education-list">Education List</div>
  }
}))

vi.mock('@/components/ContactBar', () => ({
  default: function MockContactBar() {
    return <div data-testid="contact-bar">Contact Bar</div>
  }
}))

vi.mock('@/components/Experience', () => ({
  default: function MockExperience() {
    return <div data-testid="experience">Experience</div>
  }
}))

describe('Contact', () => {
  it('renders profile image', () => {
    render(<Contact />)

    const image = screen.getByAltText('Cristiano Faustino')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'images/profile-pic.jpg')
  })

  it('renders lead headline', () => {
    render(<Contact />)

    expect(screen.getByText(/Senior Software Engineer Leads Platform Rebuild at Giftbit/)).toBeInTheDocument()
  })

  it('renders lead byline', () => {
    render(<Contact />)

    expect(screen.getByText(/A passionate developer building scalable, reliable systems/)).toBeInTheDocument()
  })

  it('renders about text content', () => {
    render(<Contact />)

    expect(screen.getByText(/Senior Software Developer at Giftbit/)).toBeInTheDocument()
    expect(screen.getByText(/15 years of experience/)).toBeInTheDocument()
  })

  it('renders Experience component', () => {
    render(<Contact />)

    expect(screen.getByTestId('experience')).toBeInTheDocument()
  })

  it('renders Education section with EducationList', () => {
    render(<Contact />)

    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByTestId('education-list')).toBeInTheDocument()
  })

  it('renders ContactBar component', () => {
    render(<Contact />)

    expect(screen.getByTestId('contact-bar')).toBeInTheDocument()
  })
})

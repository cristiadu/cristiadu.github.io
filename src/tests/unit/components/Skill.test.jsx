import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skill from '@/components/Skill'

describe('Skill', () => {
  const mockSkill = {
    image: 'skills/react.png',
    text: 'React.js',
    years: 8
  }

  it('renders skill image with correct alt text', () => {
    render(<Skill skill={mockSkill} />)

    const image = screen.getByAltText('React.js')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'images/skills/react.png')
  })

  it('renders skill text', () => {
    render(<Skill skill={mockSkill} />)

    expect(screen.getByText('React.js')).toBeInTheDocument()
  })

  it('renders years of experience when provided', () => {
    render(<Skill skill={mockSkill} />)

    expect(screen.getByText('8 years')).toBeInTheDocument()
  })

  it('renders singular year when years is 1', () => {
    const singleYearSkill = { ...mockSkill, years: 1 }
    render(<Skill skill={singleYearSkill} />)

    expect(screen.getByText('1 year')).toBeInTheDocument()
  })

  it('does not render years when not provided', () => {
    const skillWithoutYears = { image: 'skills/test.png', text: 'Test Skill' }
    render(<Skill skill={skillWithoutYears} />)

    expect(screen.queryByText(/year/)).not.toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skill from '@/components/Skill'

describe('Skill', () => {
  const mockSkill = {
    image: 'skills/react.png',
    text: 'React.js'
  }

  it('renders skill image with correct alt text', () => {
    render(<Skill skill={mockSkill} />)

    const image = screen.getByAltText('React.js')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'images/skills/react.png')
  })
})

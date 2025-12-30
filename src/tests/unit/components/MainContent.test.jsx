import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import MainContent from '@/components/layout/MainContent'

vi.mock('@/hooks/useJsonData', () => ({
  default: () => ({ data: [], loading: false, error: null })
}))

describe('MainContent', () => {
  it('renders Contact section', () => {
    render(<MainContent />)

    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
  })

  it('renders ProjectList section', () => {
    render(<MainContent />)

    expect(screen.getByText('Jobs & Projects')).toBeInTheDocument()
  })

  it('renders SkillsList section', () => {
    render(<MainContent />)

    expect(screen.getByText('Main Skills')).toBeInTheDocument()
  })

  it('renders as a section element', () => {
    render(<MainContent />)

    const section = document.querySelector('section.content')
    expect(section).toBeInTheDocument()
  })
})


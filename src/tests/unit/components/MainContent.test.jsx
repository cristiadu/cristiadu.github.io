import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import MainContent from '@/components/layout/MainContent'

vi.mock('@/hooks/useJsonData', () => ({
  default: () => ({ data: [], loading: false, error: null })
}))

describe('MainContent', () => {
  it('renders Contact section with lead headline', () => {
    render(<MainContent />)

    expect(screen.getByText(/Brazilian Software Engineer/)).toBeInTheDocument()
    expect(screen.getByText(/Senior Software Developer at Giftbit/)).toBeInTheDocument()
  })

  it('renders ProjectList section', () => {
    render(<MainContent />)

    expect(screen.getByText('Career')).toBeInTheDocument()
  })

  it('renders SkillsList section', () => {
    render(<MainContent />)

    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('renders as a main element with newspaper-content class', () => {
    render(<MainContent />)

    const main = document.querySelector('main.newspaper-content')
    expect(main).toBeInTheDocument()
  })
})

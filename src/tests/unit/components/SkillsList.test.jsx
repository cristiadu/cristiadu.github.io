import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SkillsList from '@/components/SkillsList'

vi.mock('@/hooks/useJsonData')

import useJsonData from '@/hooks/useJsonData'

describe('SkillsList', () => {
  it('renders section header', () => {
    useJsonData.mockReturnValue({ data: [], loading: false, error: null })

    render(<SkillsList />)

    expect(screen.getByText('Main Skills')).toBeInTheDocument()
  })

  it('shows loading state', () => {
    useJsonData.mockReturnValue({ data: [], loading: true, error: null })

    render(<SkillsList />)

    expect(screen.getByText('Loading skills...')).toBeInTheDocument()
  })

  it('shows error state', () => {
    useJsonData.mockReturnValue({ data: [], loading: false, error: 'Failed to fetch' })

    render(<SkillsList />)

    expect(screen.getByText('Failed to load skills: Failed to fetch')).toBeInTheDocument()
  })

  it('renders skills when data is loaded', () => {
    const mockSkills = [
      { image: 'skills/react.png', text: 'React' },
      { image: 'skills/java.png', text: 'Java' }
    ]

    useJsonData.mockReturnValue({ data: mockSkills, loading: false, error: null })

    render(<SkillsList />)

    expect(screen.getByAltText('React')).toBeInTheDocument()
    expect(screen.getByAltText('Java')).toBeInTheDocument()
  })

  it('has correct article id for navigation', () => {
    useJsonData.mockReturnValue({ data: [], loading: false, error: null })

    render(<SkillsList />)

    const article = document.querySelector('#skills')
    expect(article).toBeInTheDocument()
  })
})


import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProjectList from '@/components/ProjectList'

vi.mock('@/hooks/useJsonData')

import useJsonData from '@/hooks/useJsonData'

describe('ProjectList', () => {
  it('renders section header', () => {
    useJsonData.mockReturnValue({ data: [], loading: false, error: null })

    render(<ProjectList />)

    expect(screen.getByText('Jobs & Projects')).toBeInTheDocument()
  })

  it('shows loading state', () => {
    useJsonData.mockReturnValue({ data: [], loading: true, error: null })

    render(<ProjectList />)

    expect(screen.getByText('Loading projects...')).toBeInTheDocument()
  })

  it('shows error state', () => {
    useJsonData.mockReturnValue({ data: [], loading: false, error: 'Network error' })

    render(<ProjectList />)

    expect(screen.getByText('Failed to load projects: Network error')).toBeInTheDocument()
  })

  it('renders projects when data is loaded', () => {
    const mockProjects = [
      {
        id: '1',
        name: 'Project 1',
        company: 'Company 1',
        type: 'Full-time',
        startDate: 'Jan 2020',
        endDate: 'Dec 2023',
        imagePrincipal: 'test.png',
        descriptionHTML: '<p>Description 1</p>',
        activeItem: 'in'
      },
      {
        id: '2',
        name: 'Project 2',
        company: 'Company 2',
        type: 'Contract',
        startDate: 'Feb 2019',
        endDate: 'Jan 2020',
        imagePrincipal: 'test2.png',
        descriptionHTML: '<p>Description 2</p>',
        activeItem: ''
      }
    ]

    useJsonData.mockReturnValue({ data: mockProjects, loading: false, error: null })

    render(<ProjectList />)

    expect(screen.getByText('Project 1')).toBeInTheDocument()
    expect(screen.getByText('Project 2')).toBeInTheDocument()
  })

  it('has correct article id for navigation', () => {
    useJsonData.mockReturnValue({ data: [], loading: false, error: null })

    render(<ProjectList />)

    const article = document.querySelector('#projects')
    expect(article).toBeInTheDocument()
  })
})


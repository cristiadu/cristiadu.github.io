import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Project from '@/components/Project'

describe('Project', () => {
  const mockProject = {
    id: '1',
    name: 'Test Project',
    company: 'Test Company',
    type: 'Full-time',
    startDate: 'Jan 2020',
    endDate: 'Dec 2023',
    imagePrincipal: 'projects/test.png',
    descriptionHTML: '<p>Test description</p>',
    activeItem: 'in'
  }

  it('renders project name', () => {
    render(<Project project={mockProject} />)

    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders project details when expanded', () => {
    render(<Project project={mockProject} />)

    expect(screen.getByText(/Test Company/)).toBeInTheDocument()
    expect(screen.getByText(/Full-time/)).toBeInTheDocument()
    expect(screen.getByText(/Jan 2020/)).toBeInTheDocument()
    expect(screen.getByText(/Dec 2023/)).toBeInTheDocument()
  })

  it('renders project image', () => {
    render(<Project project={mockProject} />)

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'images/projects/test.png')
  })

  it('renders project description as HTML', () => {
    render(<Project project={mockProject} />)

    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('toggles accordion on click', () => {
    render(<Project project={mockProject} />)

    const header = screen.getByText('Test Project')
    const icon = header.parentElement.querySelector('i')

    expect(icon).toHaveClass('fa-minus')

    fireEvent.click(header)

    expect(icon).toHaveClass('fa-plus')
  })

  it('starts collapsed when activeItem is not "in"', () => {
    const collapsedProject = { ...mockProject, activeItem: '' }
    render(<Project project={collapsedProject} />)

    const header = screen.getByText('Test Project')
    const icon = header.parentElement.querySelector('i')

    expect(icon).toHaveClass('fa-plus')
  })
})


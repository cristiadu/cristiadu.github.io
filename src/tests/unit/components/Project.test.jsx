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

    const toggle = document.querySelector('.archive-toggle')
    expect(toggle).toHaveClass('expanded')

    const header = document.querySelector('.archive-header')
    fireEvent.click(header)

    expect(toggle).not.toHaveClass('expanded')
  })

  it('starts collapsed when activeItem is not "in"', () => {
    const collapsedProject = { ...mockProject, activeItem: '' }
    render(<Project project={collapsedProject} />)

    const toggle = document.querySelector('.archive-toggle')
    expect(toggle).not.toHaveClass('expanded')
  })

  it('toggles accordion on Enter key press', () => {
    render(<Project project={mockProject} />)

    const toggle = document.querySelector('.archive-toggle')
    expect(toggle).toHaveClass('expanded')

    const header = document.querySelector('.archive-header')
    fireEvent.keyDown(header, { key: 'Enter' })

    expect(toggle).not.toHaveClass('expanded')
  })

  it('toggles accordion on Space key press', () => {
    render(<Project project={mockProject} />)

    const toggle = document.querySelector('.archive-toggle')
    expect(toggle).toHaveClass('expanded')

    const header = document.querySelector('.archive-header')
    fireEvent.keyDown(header, { key: ' ' })

    expect(toggle).not.toHaveClass('expanded')
  })

  it('does not toggle accordion on other key press', () => {
    render(<Project project={mockProject} />)

    const toggle = document.querySelector('.archive-toggle')
    expect(toggle).toHaveClass('expanded')

    const header = document.querySelector('.archive-header')
    fireEvent.keyDown(header, { key: 'Tab' })

    expect(toggle).toHaveClass('expanded')
  })
})

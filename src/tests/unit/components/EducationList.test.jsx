import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import EducationList from '@/components/EducationList'
import useJsonData from '@/hooks/useJsonData'

vi.mock('@/hooks/useJsonData')

vi.mock('@/components/Education', () => ({
  default: function MockEducation({ education }) {
    return <div data-testid="education-item">{education.field}</div>
  }
}))

describe('EducationList', () => {
  it('renders loading state', () => {
    useJsonData.mockReturnValue({ data: null, loading: true, error: null })

    render(<EducationList />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders error state', () => {
    useJsonData.mockReturnValue({ data: null, loading: false, error: 'Error' })

    render(<EducationList />)

    expect(screen.getByText('Failed to load')).toBeInTheDocument()
  })

  it('renders education items when data is loaded', () => {
    const mockEducation = [
      {
        degreeType: 'B.Sc.',
        field: 'Computer Science',
        institutionShort: 'UFSCar',
        location: 'São Carlos, Brazil',
        yearFrom: 2009,
        yearTo: 2014
      },
      {
        degreeType: 'Specialization',
        field: 'Software Engineering',
        institutionShort: 'UNICAMP',
        location: 'Campinas, Brazil',
        yearFrom: 2014,
        yearTo: 2016
      }
    ]

    useJsonData.mockReturnValue({ data: mockEducation, loading: false, error: null })

    render(<EducationList />)

    const items = screen.getAllByTestId('education-item')
    expect(items).toHaveLength(2)
    expect(screen.getByText('Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Software Engineering')).toBeInTheDocument()
  })
})

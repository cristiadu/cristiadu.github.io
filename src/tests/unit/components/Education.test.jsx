import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Education from '@/components/Education'

describe('Education', () => {
  const mockEducation = {
    degreeType: 'B.Sc.',
    field: 'Computer Science',
    institution: 'Federal University of São Carlos',
    institutionShort: 'UFSCar',
    location: 'São Carlos, Brazil',
    yearFrom: 2009,
    yearTo: 2014
  }

  it('renders education field', () => {
    render(<Education education={mockEducation} />)

    expect(screen.getByText('Computer Science')).toBeInTheDocument()
  })

  it('renders institution short name with degree type', () => {
    render(<Education education={mockEducation} />)

    expect(screen.getByText(/UFSCar/)).toBeInTheDocument()
    expect(screen.getByText(/B.Sc./)).toBeInTheDocument()
  })

  it('renders location and year range', () => {
    render(<Education education={mockEducation} />)

    expect(screen.getByText(/São Carlos, Brazil/)).toBeInTheDocument()
    expect(screen.getByText(/2009/)).toBeInTheDocument()
    expect(screen.getByText(/2014/)).toBeInTheDocument()
  })
})

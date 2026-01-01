import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Experience from '@/components/Experience'

describe('Experience', () => {
  it('renders experience section title', () => {
    render(<Experience />)

    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('renders years of experience', () => {
    render(<Experience />)

    expect(screen.getByText('12+')).toBeInTheDocument()
  })

  it('renders experience label', () => {
    render(<Experience />)

    expect(screen.getByText('Years in Software Development')).toBeInTheDocument()
  })
})

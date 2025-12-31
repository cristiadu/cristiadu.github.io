import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ReactDOM from 'react-dom/client'

vi.mock('react-dom/client', () => ({
  default: {
    createRoot: vi.fn(() => ({
      render: vi.fn()
    }))
  }
}))

vi.mock('@/PortfolioApp', () => ({
  default: function MockPortfolioApp() {
    return <div data-testid="portfolio-app">Portfolio App</div>
  }
}))

describe('index.jsx', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('creates root and renders PortfolioApp', async () => {
    await import('@/index')

    expect(ReactDOM.createRoot).toHaveBeenCalledTimes(1)
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(document.getElementById('root'))

    const mockRoot = ReactDOM.createRoot.mock.results[0].value
    expect(mockRoot.render).toHaveBeenCalledTimes(1)
  })
})

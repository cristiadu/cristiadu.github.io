import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
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

  it('renders complex description markup safely', () => {
    const richProject = {
      ...mockProject,
      descriptionHTML: [
        '<!-- ignored comment -->',
        '<p><strong>Bold text</strong><em>Emphasis</em><span>Inline span</span><a href="/details">Read more</a><br/>After break</p>',
        '<ul><li>Bullet item</li></ul>',
        '<ol><li>Ordered item</li></ol>',
        '<section>Loose section text</section>'
      ].join('')
    }

    const { container } = render(<Project project={richProject} />)

    expect(screen.getByText('Bold text').tagName).toBe('STRONG')
    expect(screen.getByText('Emphasis').tagName).toBe('EM')
    expect(screen.getByText('Inline span').tagName).toBe('SPAN')
    expect(screen.getByRole('link', { name: 'Read more' })).toHaveAttribute('href', '/details')
    expect(screen.getByText('Bullet item').tagName).toBe('LI')
    expect(screen.getByText('Ordered item').tagName).toBe('LI')
    expect(screen.getByText('Loose section text')).toBeInTheDocument()
    expect(screen.getByText('After break')).toBeInTheDocument()
    expect(container.querySelector('.archive-description br')).not.toBeNull()
  })

  it('uses a fallback href for description links without an href attribute', () => {
    const fallbackLinkProject = {
      ...mockProject,
      descriptionHTML: '<p><a>Fallback link</a></p>'
    }

    render(<Project project={fallbackLinkProject} />)

    expect(screen.getByRole('link', { name: 'Fallback link' })).toHaveAttribute('href', '#')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('ignores non-element, non-text nodes in parsed descriptions', () => {
    vi.spyOn(DOMParser.prototype, 'parseFromString').mockReturnValue({
      body: {
        childNodes: [
          { nodeType: 8 },
          {
            nodeType: 1,
            tagName: 'p',
            childNodes: [{ nodeType: 3, textContent: 'Recovered text' }]
          }
        ]
      }
    })

    render(<Project project={mockProject} />)

    expect(screen.getByText('Recovered text')).toBeInTheDocument()
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

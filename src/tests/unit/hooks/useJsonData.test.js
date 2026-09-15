import { createElement } from 'react'
import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import axios from 'axios'
import useJsonData from '@/hooks/useJsonData'
import { PreviewDataContext } from '@/admin/PreviewDataContext'

vi.mock('axios')

describe('useJsonData', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns loading state initially', () => {
    axios.get.mockImplementation(() => new Promise(() => {}))

    const { result } = renderHook(() => useJsonData('test.json'))

    expect(result.current.loading).toBe(true)
    expect(result.current.data).toEqual([])
    expect(result.current.error).toBeNull()
  })

  it('returns data on successful fetch', async () => {
    const mockData = [{ id: 1, name: 'Test' }]
    axios.get.mockResolvedValue({ data: mockData })

    const { result } = renderHook(() => useJsonData('test.json'))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBeNull()
  })

  it('returns CMS preview data without fetching', () => {
    const previewData = [{ id: 1, name: 'Unsaved draft' }]
    const wrapper = ({ children }) => createElement(
      PreviewDataContext,
      { value: { 'test.json': previewData } },
      children
    )

    const { result } = renderHook(() => useJsonData('test.json'), { wrapper })

    expect(result.current).toEqual({ data: previewData, loading: false, error: null })
    expect(axios.get).not.toHaveBeenCalled()
  })

  it('fetches normally for a url the preview data does not cover', async () => {
    const mockData = [{ id: 2, name: 'Committed' }]
    axios.get.mockResolvedValue({ data: mockData })
    const wrapper = ({ children }) => createElement(
      PreviewDataContext,
      { value: { 'other.json': [{ id: 3 }] } },
      children
    )

    const { result } = renderHook(() => useJsonData('test.json'), { wrapper })

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toEqual(mockData)
    expect(axios.get).toHaveBeenCalledWith('test.json')
  })

  it('returns error on failed fetch', async () => {
    axios.get.mockRejectedValue(new Error('Network error'))

    const { result } = renderHook(() => useJsonData('test.json'))

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toEqual([])
    expect(result.current.error).toBe('Network error')
  })
})

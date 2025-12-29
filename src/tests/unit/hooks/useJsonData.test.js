import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import axios from 'axios'
import useJsonData from '@/hooks/useJsonData'

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

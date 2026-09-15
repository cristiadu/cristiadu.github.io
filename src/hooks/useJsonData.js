import { useState, useEffect, use } from 'react'
import axios from 'axios'
import { PreviewDataContext } from '@/admin/PreviewDataContext'

const useJsonData = (url) => {
  const previewData = use(PreviewDataContext)?.[url]
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (previewData !== undefined) return
    axios.get(url)
      .then(response => setData(response.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [url, previewData])

  if (previewData !== undefined) return { data: previewData, loading: false, error: null }
  return { data, loading, error }
}

export default useJsonData

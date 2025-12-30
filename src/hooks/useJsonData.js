import { useState, useEffect } from 'react'
import axios from 'axios'

const useJsonData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}

export default useJsonData

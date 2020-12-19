import { useState, useEffect } from 'react'
import { GetTest } from '../api'

export function useTestData(idCourse, idMaterial) {
  const [data, setTest] = useState({ test: {
    boilerplate: '',
    description: '',
    case_test: ''
  } })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    GetTest(idCourse, idMaterial)
      .then((res) => res.data)
      .then((response) => setTest(response))
      .finally(() => setLoading(false))
  }, [])
  return { data, loading }
}

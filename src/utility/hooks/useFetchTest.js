import { useState, useEffect } from 'react'
import { GetTest } from '../api'

export function useTestData(idCourse, idMaterial) {
  const [test, setTest] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    GetTest(idCourse, idMaterial)
      .then((res) => res.json())
      .then((response) => setTest(response))
      .finally(() => setLoading(false))
  }, [])
  return { test, loading }
}

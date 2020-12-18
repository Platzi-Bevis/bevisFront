import { useState, useEffect } from 'react'
import { GetTest } from '../api'

export function useCategoriesData (id_course, id_material) {
  const [test, setTest] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    GetTest(id_course, id_material)
      .then(res => res.json())
      .then(response => setTest(response))
      .finally(() => setLoading(false))
  }, [])
  return { test, loading }
}

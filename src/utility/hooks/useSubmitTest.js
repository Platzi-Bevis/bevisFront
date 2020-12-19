import { useState } from 'react'
import { PostTest } from '../api'

export function useSubmitTest(idCourse, idMaterial, { language, code }) {
  const [solution, setSolution] = useState(null)
  const [loading, setLoading] = useState(false)

  setLoading(true)

  PostTest(idCourse, idMaterial, { language, code })
    .then((res) => res.data)
    .then((response) => setSolution(response))
    .finally(() => setLoading(false))

  return { solution, loading }
}

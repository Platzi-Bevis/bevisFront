import React from 'react'

import '../assets/styles/components/Course.scss'

const Course = () => {
  return (
    <div className="Course">
      <figure className="Course__imageContainer">
        <img className="Course__image" src="https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png" width="32" alt="Next.js" />
      </figure>
      <span className="Course__name">Curso Básico de Python</span>
    </div>
  )
}

export default Course

import React from 'react'

import '../assets/styles/components/Course.scss'

const Course = () => {
  return (
    <div className="Course">
      <figure className="Course__imageContainer">
        <img className="Course__image" src="https://static.platzi.com/media/achievements/badge-nextjs-2259fc68-f86b-486e-bc09-95311a887985.png" width="32" alt="Next.js" />
      </figure>
      <span className="Course__name">Curso de Next.js</span>
    </div>
  )
}

export default Course

import React from 'react'

import '../assets/styles/components/Teacher.scss'

const Teacher = () => {
  return (
    <div className="Teacher">
      <figure className="Teacher__avatarContainer">
        <img className="Teacher__avatar" src="https://static.platzi.com/media/avatars/avatars/jonalvarezz_4a29a39c-cf90-4d63-b79f-aaff5b5f12f2.jpg" width="60" role="presentation" />
      </figure>
      <span className="Teacher__name"><strong>Jonathan Alvarez</strong></span>
    </div>
  )
}

export default Teacher
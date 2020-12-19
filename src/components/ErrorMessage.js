import React from 'react'

import '../assets/styles/components/ErrorMessage.scss'

const ErrorMessage = ({ message }) => {
  return (
    <div className='ErrorMessage'>
      <div className='ErrorMessage__title'>
        ¡Buen intento, pero hay algo por mejorar!
      </div>
      <span className='ErrorMessage__message'>{message}</span>
    </div>
  )
}

export default ErrorMessage

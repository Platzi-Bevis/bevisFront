import React from 'react'

import '../assets/styles/components/ErrorMessage.scss'

const ErrorMessage = ({ message }) => {
  return (
    <div className="ErrorMessage">
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage
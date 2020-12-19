import React from 'react'

import '../assets/styles/components/SuccessMessage.scss'

const SuccessMessage = ({ message }) => {
  return (
    <div className='SuccessMessage'>
      <div className='SuccessMessage__title'>
        Felicidades, has completado la prueba con éxito!
      </div>
      <div className='SuccessMessage__subtitle'>
        Output:
      </div>
      <span className='SuccessMessage__message'>{message}</span>
    </div>
  )
}

export default SuccessMessage

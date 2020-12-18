import React from 'react'

import '../assets/styles/components/ModuleTab.scss'

const ModuleTab = () => {
  return (
    <div className="ModuleTab">
      <input type="radio" id="comments" />
      <label className="tab-item" htmlFor="comments">
        Aportes
      </label>
      <input type="radio" id="questions" />
      <label className="tab-item" htmlFor="questions">
        Preguntas
      </label>
      <input type="radio" id="practice" />
      <label className="tab-item" htmlFor="practice">
        Práctica
      </label>
      <input type="radio" id="resources" />
      <label className="tab-item" htmlFor="resources">
        Archivos y enlaces
      </label>
      <input type="radio" id="bookmarks" />
      <label className="tab-item" htmlFor="bookmarks">
        Marcadores
      </label>
    </div>
  )
}

export default ModuleTab

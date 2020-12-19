import React, { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import ErrorMessage from './ErrorMessage'

import '../assets/styles/components/CodeEditor.scss'

const CodeEditor = () => {
  const languaje = 'javascript'

  const [theme, setTheme] = useState('dark')
  const [themeName, setThemeName] = useState(false)

  const [isEditorReady, setIsEditorReady] = useState(false)
  const valueGetter = useRef()

  const [codeValue, setCodeValue] = useState('')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    setThemeName(!themeName)
  }

  const handleEditorDidMount = (value) => {
    setIsEditorReady(true)
    valueGetter.current = value
  }

  const handleShowValue = () => {
    setCodeValue(valueGetter.current())
  }

  return (
    <div className='CodeEditor'>
      <button onClick={toggleTheme} type='button' className='CodeEditor-themeBtn'>
        {!themeName ? 'Light Mode' : 'Dark Mode'}
      </button>

      <Editor
        height='500px'
        width='100%'
        className='CodeEditor-Editor'
        language={languaje}
        theme={theme}
        value='// Ingresa tu código aquí'
        editorDidMount={handleEditorDidMount}
      />

      <ErrorMessage message="Error" />

      <button onClick={handleShowValue} disabled={!isEditorReady} type='button' className='CodeEditor-sendBtn'>
        Enviar
      </button>

      <div className='CodeEditor-output'>
        {codeValue}
      </div>
    </div>
  )
}

export default CodeEditor

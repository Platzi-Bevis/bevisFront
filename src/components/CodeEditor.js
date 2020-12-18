import React, { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'

const CodeEditor = () => {
  const languaje = 'javascript'

  const [theme, setTheme] = useState('dark')
  const [isEditorReady, setIsEditorReady] = useState(false)
  const valueGetter = useRef()

  const [codeValue, setCodeValue] = useState('')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
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
      <button onClick={toggleTheme} type='button'>
        Toggle Theme
      </button>

      <Editor
        height='800px'
        width='400px'
        language={languaje}
        theme={theme}
        value='// Ingresa tu código aquí'
        editorDidMount={handleEditorDidMount}
      />

      <button onClick={handleShowValue} disabled={!isEditorReady} type='button'>
        Send
      </button>

      <div>
        {codeValue}
      </div>
    </div>
  )
}

export default CodeEditor

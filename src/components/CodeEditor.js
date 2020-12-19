import React, { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import ErrorMessage from './ErrorMessage'

import '../assets/styles/components/CodeEditor.scss'

const CodeEditor = ({ description, boilerplate, language, onSubmint, submitStatus}) => {

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
    onSubmint(valueGetter.current())
  }

  return (
    <div className='CodeEditor'>
      <div className='d-flex'>
        <p className='CodeEditor__description'>{description}</p>
        <button onClick={toggleTheme} type='button' className='CodeEditor-themeBtn CodeEditor__button'>
          {!themeName ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <Editor
        height='500px'
        width='100%'
        className='CodeEditor-Editor'
        language={language}
        theme={theme}
        value={boilerplate}
        editorDidMount={handleEditorDidMount}
      />
      <div className="button-container d-flex">
        <button onClick={handleShowValue} type='button' className='CodeEditor__button CodeEditor__button--outline'>
          Cambiar prueba
        </button>
        <button onClick={handleShowValue} disabled={!isEditorReady} type='button' className='CodeEditor__button'>
          Enviar
        </button>
      </div>

      {submitStatus.loading ? (
        <div> LOADING </div>
      ) : (
        <TestStatus testStatus={submitStatus} />
      )}

    </div>
  )
}
const TestStatus = ({ testStatus }) => {
  const { status, output_test } = testStatus

  if (status === 'clean') {
    return ('')
  }
  if (status === false) {
    return (<ErrorMessage message={output_test} />)
  }

  if (status === 'Accepted') {
    return (<span className='SuccessMessage'>{ output_test }</span>)
  }
}
export default CodeEditor

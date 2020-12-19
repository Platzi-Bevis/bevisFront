import React, { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import ErrorMessage from './ErrorMessage'
import SuccessMessage from './SuccessMessage'

import '../assets/styles/components/CodeEditor.scss'

const CodeEditor = ({title, description, boilerplate, language, onSubmint, submitStatus}) => {

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
      <div>
        <h3 className="CodeEditor__title">{title}</h3>
        <p className='CodeEditor__description'>{description}</p>
      </div>

      <Editor
        height='350px'
        width='100%'
        className='CodeEditor-Editor'
        language={language}
        theme={theme}
        value={boilerplate}
        editorDidMount={handleEditorDidMount}
      />
      <div className="button-container d-flex">
        <button onClick={toggleTheme} type='button' className='CodeEditor-themeBtn CodeEditor__button'>
          {!themeName ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="d-flex">
          <button onClick={handleShowValue} type='button' className='CodeEditor__button CodeEditor__button--outline CodeEditor__button--hidden'>
            Cambiar prueba
          </button>
          <button onClick={handleShowValue} disabled={!isEditorReady} type='button' className='CodeEditor__button'>
            Enviar
          </button>
        </div>
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

  if (status === true) {
    // return (<span className='SuccessMessage'>{ output_test }</span>)
    return (<SuccessMessage message={output_test} />)
  }
}
export default CodeEditor

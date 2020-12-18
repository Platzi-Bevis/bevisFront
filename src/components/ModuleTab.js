import React, { useState } from 'react'
import { useTestData } from '../utility/hooks/useFetchTest';
import CodeEditor from './CodeEditor'

import '../assets/styles/components/ModuleTab.scss'

const TabButton = ({ id, children }) => {
  return (
    <>
      <input type='radio' id={id} name='nav' value={id} />
      <label className='tab-item' htmlFor={id}>
        {children}
      </label>
    </>
  )
}

const ModuleTab = () => {
  const { test, loading } = useTestData(5067, 10)
  console.group('ModuleTab')
  console.log(test)
  console.log(loading)
  console.groupEnd('ModuleTab')
  const [codeEditor, setCodeEditor] = useState(false)

  const handleEditor = () => {
    setCodeEditor(!codeEditor)
    console.log('works')
  }

  return (
    <section className='ModuleTab'>
      <form className='tab-header'>
        <TabButton id='comments'>Aportes</TabButton>
        <TabButton id='questions'>Preguntas</TabButton>
        <TabButton id='practice' onClick={handleEditor}>
          Práctica
        </TabButton>
        <TabButton id='resources'>Archivos y enlaces</TabButton>
        <TabButton id='bookmarks'>Marcadores</TabButton>
      </form>
      <CodeEditor />
    </section>
  )
}

export default ModuleTab

import React from 'react'
import { useTestData } from '../utility/hooks/useFetchTest'
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
  const { test, loading } = useTestData(12, 2)
  const language = 'python'

  return (
    <section className='ModuleTab'>
      <form className='tab-header'>
        <TabButton id='comments'>Aportes</TabButton>
        <TabButton id='questions'>Preguntas</TabButton>
        <TabButton id='practice'>
          Práctica
        </TabButton>
        <TabButton id='resources'>Archivos y enlaces</TabButton>
        <TabButton id='bookmarks'>Marcadores</TabButton>
      </form>
      {!loading ? (
        <CodeEditor
          boilerplate={test.boilerplate}
          description={test.description}
          language={language}
          caseTest={test.case_test}
        />
      ) : (
        ''
      )}
    </section>
  )
}

export default ModuleTab

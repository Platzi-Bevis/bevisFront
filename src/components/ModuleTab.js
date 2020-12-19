import React, { useState } from 'react'
import { useTestData } from '../utility/hooks/useFetchTest'
import { PostTest } from '../utility/api'
import CodeEditor from './CodeEditor'

import '../assets/styles/components/ModuleTab.scss'

const TabButton = ({ id, children, highlight }) => {

  return (
    <>
      <input type='radio' id={id} name='nav' value={id} />
      <label className={`tab-item ${highlight ? 'notificate' : ''}`} htmlFor={id}>
        {children}
      </label>
    </>
  )
}

const ModuleTab = () => {
  const { data, loading } = useTestData(12, 2)
  const [tab, setTab] = useState('comments')
  const [loadingSumit, setLoading] = useState({ status: 'clean', loading: false })

  const language = 'python'

  const clickToSumint = (code) => {
    setLoading({ status: 'clean', loading: true })
    // TODO change te language on response as the same of editor,
    // first change on the back
    PostTest(12, 1, { language: 'PY', code })
    /**
     * the response of post return a object
     * data: { ... data: {} }
     */
      .then((res) => res.data)
      .then((res) => res.data)
      .then((sumitStatus) => setLoading({ ...sumitStatus, loading: false }))
      .catch((err) => { console.error(err) })
  }
  return (
    <section className='ModuleTab'>
      <form className='tab-header' onChange={(e) => setTab(e.target.id)}>
        <TabButton id='comments'>Aportes</TabButton>
        <TabButton id='questions'>Preguntas</TabButton>
        <TabButton id='practice' highlight={tab !== 'practice'}>
          Práctica
        </TabButton>
        <TabButton id='resources'>Archivos y enlaces</TabButton>
        <TabButton id='bookmarks'>Marcadores</TabButton>
      </form>
      {!loading && tab === 'practice' ? (
        <CodeEditor
          boilerplate={data.test.boilerplate}
          description={data.test.description}
          language={language}
          caseTest={data.test.case_test}
          onSubmint={clickToSumint}
          submitStatus={loadingSumit}
        />
      ) : (
        ''
      )}
    </section>
  )
}

export default ModuleTab

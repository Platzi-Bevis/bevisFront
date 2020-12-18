import React from 'react'

import Header from './Header'
import TimelineNav from './TimelineNav'
import Video from './Video'
import ClassDetails from './ClassDetails'
import Course from './Course'
import ModuleTab from './ModuleTab'
import '../assets/styles/App.scss'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <TimelineNav />
        <section>
          <Video />
          <ClassDetails />
        </section>
        <section className="class-resources">
          <Course />
          <ModuleTab />
        </section>
      </main>
    </>
  )
}

export default App

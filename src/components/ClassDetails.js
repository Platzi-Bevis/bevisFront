import React from 'react'

import Teacher from '../components/Teacher'
import '../assets/styles/components/ClassDetails.scss'
import { MdBugReport } from 'react-icons/md'
import { MdSkipPrevious } from 'react-icons/md'
import { MdSkipNext } from 'react-icons/md'

const ClassDetails = () => {
  return (
    <section className="ClassDetails">
      <div className="tabsContainer">
        <label className="tab" htmlFor="description">
          Descripción
          <input type="radio" id="description" value="description" />
        </label>
        <div className="controls-buttonsContainer">
          <button className="report-button">
            <MdBugReport size="15px" color="#0791E6" />
          </button>
          <a className="prev-class" href="/">
            <MdSkipPrevious size="30px" color="#0791E6" />
          </a>
          <a className="next-class" href="/">
            <MdSkipNext size="30px" color="#ffffff" />
            Utilizando Vercel
          </a>
        </div>
      </div>
      <div className="ClassDetails__panel">
        <h1>Finalizando las páginas</h1>
        <Teacher />
      </div>
    </section>
  )
}

export default ClassDetails

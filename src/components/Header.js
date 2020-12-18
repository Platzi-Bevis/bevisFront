import React from 'react'
import '../assets/styles/components/Header.scss'

import logoPlatzi from '../assets/static/logo-platzi.svg'
import tinkerbell from '../assets/static/uil_bell.svg'
import searchIcon from '../assets/static/uil_search.svg'

const Header = () => {
  return (
    <header className="Header">
      <figure className="Header__logoContainer">
        <img className="Header__logo" src={logoPlatzi} alt="Platzi" width="80" />
      </figure>
      <div className="d-flex">
        <div className="Header__nav">
          <ul>
            <li>
              <a href="/">Clases</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Agenda</a>
            </li>
            <li>
              <a href="/">TV</a>
            </li>
          </ul>
          <div className="user">
            <figure className="user__avatarContainer">
              <img className="user__avatar" src="https://static.platzi.com/media/avatars/avatars/felipesc_88671a93-ac06-4c58-92c0-48caa212ba85.png" width="20" alt="Nombre del usuario"/>
            </figure>
            <span>1.000 pts</span>
          </div>
          <figure className="Header__tinkerbellContainer">
            <img className="Header__tinkerbell" src={tinkerbell} width="24" role="presentation" />
          </figure>
        </div>
        <form className="Header__form">
          <label htmlFor="name">
            <input type="text" placeholder="Buscar en Platzi" id="name" name="search" />
          </label>
          <button>
            <img className="search-icon" src={searchIcon} width="15" role="presentation" />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header

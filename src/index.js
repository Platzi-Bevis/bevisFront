import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

console.log('%c Secret API URL', 'color: green;',process.env.APP_API_URL)
ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react'
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom'

import './css/style.scss'

const App = (props) => {
  console.log('Menu - Props', props)
  return (
    <Router>
      <ul>
        <li><NavLink to="/" exact>home</NavLink></li>
        <li><NavLink to="/contato">contato</NavLink></li>
        <li><NavLink to="/produto">produto</NavLink></li>
      </ul>
    </Router>
  )
}

export default App

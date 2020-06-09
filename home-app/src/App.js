import React from 'react'

import Movie from './components/Movie'

const App = () => {
  return (
    <>
      <h1>Home...........</h1>
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Movie />
    </>
  )
}

export default App

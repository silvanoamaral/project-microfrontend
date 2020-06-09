import React, { useState } from 'react'
import { Provider } from 'react-redux'

import Button from './components/Button'
import Count from './Counter'

import { storeInstance } from './redux/store'

const App = props => {
  console.log('props: ',props, 'storeInstance',storeInstance)
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)

  return (
    <>
      <Provider store={storeInstance}>
        <h1>Produto.................</h1>
        <Button
          label="increment"
          onClick={() => increment()}
        />
        <p>{count}</p>

        <Count />
      </Provider>
    </>
  );
}

export default App

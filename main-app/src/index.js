import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as singleSpa from 'single-spa'

import { remoteImport } from './helper/microSpa'
import { GlobalEventDistributor } from './helper/GlobalEventDistributor'

import './index.css'
import App from './component/App'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

export async function loadApp(name, storeURL, globalEventDistributor) {
  let storeModule = {}, customProps = {globalEventDistributor: globalEventDistributor}

  // try to import the store module
  try {
    storeModule = storeURL ? await remoteImport(storeURL) : {storeInstance: null}
  } catch (e) {
    console.log(`Could not load store of app ${name}.`, e)
  }

  if (storeModule.storeInstance && globalEventDistributor) {
    // add a reference of the store to the customProps
    customProps.store = storeModule.storeInstance

    // register the store with the globalEventDistributor
    globalEventDistributor.registerStore(storeModule.storeInstance)
  }

  return customProps.store
}

async function init() {
  const {
    location
  } = window

  const globalEventDistributor = new GlobalEventDistributor()
  
  //await loadApp('home', '/', '//localhost:8081/build/app.js', null, null)
  //await loadApp('produto', '/produto', '//localhost:8082/build/app.js', '//localhost:8082/build/store.js', globalEventDistributor)

  singleSpa.registerApplication(
    'produto',
    remoteImport(`//localhost:8082/build/app.js`),
    () => location.pathname === "/produto"
  )

  singleSpa.registerApplication(
    'home',
    remoteImport(`//localhost:8081/build/app.js`),
    () => location.pathname === "/" || location.pathname === "",
    loadApp('produto', '//localhost:8082/build/store.js', globalEventDistributor)
  )

  singleSpa.registerApplication(
    'menu',
    remoteImport(`//localhost:8080/build/app.js`),
    () => true
  )

  singleSpa.start()
}

init()
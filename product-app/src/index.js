import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

import App from './App'

const domElementGetter = () => {
  let el = document.getElementById('content')
  if (!el) {
    el = document.createElement('div')
    el.id = 'content'
    document.body.appendChild(el)
  }

  return el
}

const reactlifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return (
    <div>This renders when a catastrophic error occurs {err}</div>
    )
  },
  //domElementGetter: () => document.getElementById('content')
  domElementGetter,
})

/* export const bootstrap = [reactlifecycles.bootstrap]
export const mount = [reactlifecycles.mount]
export const unmount = [reactlifecycles.unmount] */

export function bootstrap(props) {
	return reactlifecycles.bootstrap(props);
}

export function mount(props) {
	return reactlifecycles.mount(props);
}

export function unmount(props) {
	return reactlifecycles.unmount(props);
}

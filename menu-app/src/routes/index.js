import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../single-spa-imports/Home'

import NotFound from '../pages/NotFound'
import Service from '../pages/Service'

const FadingRoute = ({ component: Component }) => {
  return (
    <Route
      render={routeProps => (
        <Component />
      )}
    />
  )
}

export default () => (
  <>
    <Switch>
      <FadingRoute path="/" exact component={Home} />
      <Route path="/service" component={Service} />
      <Route path="*" component={NotFound} />
    </Switch>
  </>
)
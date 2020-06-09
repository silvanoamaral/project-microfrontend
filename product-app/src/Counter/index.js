import React, { useState } from 'react'
import { connect } from 'react-redux'

import Button from '../components/Button'

const Counter = props => {
  const {
    count,
    dispatch
  } = props

  return(
    <>
      <p>Count: {count}</p>
      <Button
        label="incrementa com redux"
        onClick={() => dispatch({ type: 'INCREMENT' }) }
      />
    </>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)
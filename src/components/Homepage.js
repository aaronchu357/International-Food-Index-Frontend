import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import Map from './Map'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => this.props.history.push('/login')}>Login</Button>
        <Button onClick={() => this.props.history.push('/signup')}>Signup</Button>
        <Button onClick={() => this.props.history.push('/map')}>Map</Button>
      </div>
    )
  }
}

export default Homepage
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from '../components/Homepage'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'
import Map from '../components/Map'

export default class FirstContainer extends Component {

  state = {
    user: ''
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(userInfo => {
          this.setState({
            user: userInfo.data
          })
        })
    }
  }

  handleSubmit = (userData, history) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(resp => resp.json())
      .then(parsedResponse => {
        if (parsedResponse.token) {
          console.log(parsedResponse)
          localStorage.setItem('token', parsedResponse.token)
          debugger
          this.setState({ user: parsedResponse.user })
          history.push('/map')
        } else {
          alert('Wrong Password')
        }
      })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/login' render={(routerProps) => <LoginPage {...routerProps} handleSubmit={this.handleSubmit} />} />
        <Route path='/map' render={(routerProps) => <Map {...routerProps} userInfo={this.state.user} />} />
      </Switch>
    )
  }
}
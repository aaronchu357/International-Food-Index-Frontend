import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Homepage from '../components/Homepage'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'
import Map from '../components/Map'
import ProfilePage from '../components/ProfilePage'
import ComingSoon from '../components/ComingSoon'

export default class FirstContainer extends Component {

  state = {
    user: ''
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch('/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(userInfo => {
          this.setState({ user: userInfo.data.attributes })
        })
    }
  }

  handleSubmit = (userData, history, endpoint, alertMessage) => {
    fetch(`/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ userData })
    })
      .then(resp => resp.json())
      .then(parsedResponse => {
        if (parsedResponse.token) {
          localStorage.setItem('token', parsedResponse.token)
          this.setState({ user: parsedResponse.user })
          history.push('/map')
        } else {
          alert(alertMessage)
        }
      })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/map' render={(routerProps) => <Map {...routerProps} userInfo={this.state.user} />} />
        <Route path='/profile' render={(routerProps) => <ProfilePage {...routerProps} userInfo={this.state.user} />} />
        <Route path='/about' render={(routerProps) => <ComingSoon {...routerProps} userInfo={this.state.user} />} />
        {localStorage.token ? <Redirect to='/'/> : <Route path='/signup' render={(routerProps) => <SignupPage {...routerProps} handleSubmit={this.handleSubmit} />} />}
        {localStorage.token ? <Redirect to='/'/> : <Route path='/login' render={(routerProps) => <LoginPage {...routerProps} handleSubmit={this.handleSubmit} />} />}
      </Switch>
    )
  }
}
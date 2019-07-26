import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class SignupPage extends Component {

  state = {
    username: '',
    password: ''
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state, this.props.history, 'signup', 'Username already taken')
  }

  render() {
    return (
      <div className='signup'>
        <Button onClick={() => this.props.history.push('/')}>Homepage</Button>
        <Button onClick={() => this.props.history.push('/map')}>To Map</Button>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' placeholder='username' onChange={this.handleOnChange} />
          <br />
          <input type='password' name='password' placeholder='password' onChange={this.handleOnChange} />
          <br />
          <input type='submit' value='Signup' />
        </form>
      </div>
    )
  }
}

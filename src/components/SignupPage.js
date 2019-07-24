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
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(parsedResponse => {
        localStorage.setItem('token', parsedResponse.token)
        this.props.history.push('/map')
      })
  }

  handleOnClick = () => {
    this.props.history.push('/')
  }
  
  render() {
    return (
      <div className='signup'>
        <Button onClick={this.handleOnClick}>Go Back</Button>
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

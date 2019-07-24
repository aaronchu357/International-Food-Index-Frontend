import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class LoginPage extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLoginInputOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleOnClick = () => {
    this.props.history.push('/')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state, this.props.history)
  }

  render() {
    return (
      <div className='login'>
        <Button onClick={this.handleOnClick}>Go Back</Button>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' placeholder='username' onChange={this.handleLoginInputOnChange} />
          <br />
          <input type='password' name='password' placeholder='password' onChange={this.handleLoginInputOnChange} />
          <br />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

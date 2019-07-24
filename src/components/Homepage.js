import Button from 'react-bootstrap/Button'
import React, { Component } from 'react'

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <Button onClick={() => this.props.history.push('/login')}>Login</Button>
        <Button onClick={() => this.props.history.push('/signup')}>Signup</Button>
        <Button onClick={() => this.props.history.push('/map')}>Map</Button>
      </div>
    )
  }
}

export default Homepage
import React from 'react'
import Button from 'react-bootstrap/Button'

const Homepage = props => {
  return (
    <div className='homepage'>
      <Button onClick={() => props.history.push('/login')}>Login</Button>
      <Button onClick={() => props.history.push('/signup')}>Signup</Button>
      <Button onClick={() => props.history.push('/map')}>Map</Button>
    </div>
  )
}

export default Homepage
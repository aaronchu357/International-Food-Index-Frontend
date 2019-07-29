import React from 'react'
import TopNavBar from './TopNavBar'

const Homepage = props => {
  return (
    <div className='homepage'>
      <TopNavBar {...props} buttonName={"Login"} navPath={"/login"}/>
    </div>
  )
}

export default Homepage
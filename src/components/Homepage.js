import React from 'react'
import TopNavBar from './TopNavBar'
import HomepageFoodInfoIFrame from './HomepageFoodInfoIFrame'

const Homepage = props => {
  return (
    <div className='homepage'>
      <TopNavBar {...props} buttonName={"Login"} navPath={"/login"}/>
      <HomepageFoodInfoIFrame source={"http://rhythm-of-food.net/"} />
      <footer><strong>Disclaimer: THIS LANDING PAGE IS NOT MY CREATION. From <a href='http://rhythm-of-food.net/' target="_blank" rel="noopener noreferrer">Rhythm of Food</a></strong></footer>
    </div>
  )
}

export default Homepage
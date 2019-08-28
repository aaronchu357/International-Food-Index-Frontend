import React from 'react'
import TopNavBar from './TopNavBar'
import HomepageFoodInfoIFrame from './HomepageFoodInfoIFrame'
import './Homepage.css'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBView, MDBMask, MDBBttn } from 'mdbreact';

const Homepage = props => {
  return (
    <div className='homepage'>
      <TopNavBar {...props} buttonName={"Login"} navPath={"/login"} />
      <MDBView src="https://files2.theloop.com.au/166849_3.jpg?t=project-image">
        <MDBMask overlay="orange-light" >
          <MDBContainer>
            <MDBRow>
              <MDBCol md="3"></MDBCol>
              <MDBCol md="6">
                <div className='homepage-content'>
                  <h2>Curious About National Dishes Around the World?</h2>
                  <h3>Ready To Explore Foods of the World?</h3>
                  <h4>Don't Know What New Foods to Try?</h4>
                  <h5>Open to Foods of All Cultures?</h5>
                  <MDBBtn size="lg" color="dark-green" onClick={() => props.history.push('/map')}>It's Time to Explore</MDBBtn>
                </div>
              </MDBCol>
              <MDBCol md="3"></MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>

      {/* <HomepageFoodInfoIFrame source={"http://rhythm-of-food.net/"} />
        <footer><strong>Disclaimer: THIS LANDING PAGE IS NOT MY CREATION. From <a href='http://rhythm-of-food.net/' target="_blank" rel="noopener noreferrer">Rhythm of Food</a></strong></footer> */}
    </div>
  )
}

export default Homepage
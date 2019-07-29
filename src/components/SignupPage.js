import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import TopNavBar from './TopNavBar'

export default class SignupPage extends Component {

  state = {
    username: '',
    password: ''  
  }

  handleSignupInputOnChange = (e) => {
    this.setState({ [e.target.classList[1]]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state, this.props.history, 'signup', 'Username already taken')
  }

  render() {
    return (
      <div className='signup'>
        <TopNavBar {...this.props} buttonName={"Login"} navPath={"/login"}/>
        
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h5 text-center mb-4">Register</p>
                <div className="grey-text">
                  <MDBInput
                    label="Enter username"
                    icon="envelope"
                    type="text"
                    className="username"
                    onChange={this.handleSignupInputOnChange}
                  />
                  <MDBInput
                    label="Enter password"
                    icon="lock"
                    type="password"
                    className="password"
                    onChange={this.handleSignupInputOnChange}
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="primary" onClick={this.handleSubmit}>Register <i class="fas fa-user-plus"></i></MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

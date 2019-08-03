import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBView, MDBMask } from 'mdbreact';
import TopNavBar from './TopNavBar'

export default class LoginPage extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLoginInputOnChange = (e) => {
    this.setState({ [e.target.classList[1]]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state, this.props.history, 'login', 'Wrong Password')
  }

  render() {
    return (
      <div className='login'>
        <TopNavBar {...this.props} buttonName={"Register"} navPath={"/signup"} />
        <MDBView src="https://www.artranked.com/images/8f/8f70c636d426212f7e90e710cce38709.jpg">
          <MDBMask overlay="yellow-slight" >
            <MDBContainer>
              <MDBRow>
                <MDBCol md="3"></MDBCol>
                <MDBCol md="6">
                  <form>
                    <p className="h5 text-center mb-4">Log in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Enter username"
                        icon="envelope"
                        type="text"
                        className="username"
                        onChange={this.handleLoginInputOnChange}
                      />
                      <MDBInput
                        label="Enter password"
                        icon="lock"
                        type="password"
                        className="password"
                        onChange={this.handleLoginInputOnChange}

                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn color="primary" onClick={this.handleSubmit}>Login <i className="fas fa-sign-in-alt"></i></MDBBtn>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol md="3"></MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>


      </div >
    )
  }
}

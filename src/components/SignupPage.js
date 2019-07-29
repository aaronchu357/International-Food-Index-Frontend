import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBDropdownToggle, MDBCollapse, MDBIcon, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { ReactComponent as FoodLogo } from './restaurant.svg'

export default class SignupPage extends Component {

  state = {
    username: '',
    password: '',
    isOpen: false
  }

  handleSignupInputOnChange = (e) => {
    this.setState({ [e.target.classList[1]]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state, this.props.history, 'signup', 'Username already taken')
  }

  toggleCollapse = () => { this.setState({ isOpen: !this.state.isOpen }) }

  render() {
    return (
      <div className='signup'>
        <MDBNavbar color="unique-color-dark" dark expand="md">
          <MDBNavbarBrand onClick={() => this.props.history.push('/')}>
            <FoodLogo width={50} height={50} />
          </MDBNavbarBrand>

          <MDBNavbarNav left>
            <MDBBtn size="sm" color="primary" onClick={() => this.props.history.push('/map')}>Browse Map</MDBBtn>
          </MDBNavbarNav>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

            <MDBNavbarNav center>
              <MDBNavItem>
                <MDBNavbarBrand>
                  <strong className="white-text">International Food Index</strong>
                </MDBNavbarBrand>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/about">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/about">
                  <MDBIcon fab icon="google" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/about">
                  <MDBIcon fab icon="fab fa-facebook" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/about">
                  <MDBIcon fab icon="fab fa-github" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/about">
                  <MDBIcon fab icon="fas fa-linkedin" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/about">
                  <MDBIcon fab icon="fas fa-slack" />
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem active>
                {
                  localStorage.token ?
                    <MDBDropdownToggle nav caret >
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    :
                    <MDBNavLink to="/login">Login</MDBNavLink>
                }
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

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

import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBDropdownToggle, MDBCollapse, MDBIcon, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { ReactComponent as FoodLogo } from './restaurant.svg'

export default class LoginPage extends Component {

  state = {
    username: '',
    password: '',
    isOpen: false
  }

  handleLoginInputOnChange = (e) => {
    this.setState({ [e.target.classList[1]]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state, this.props.history, 'login', 'Wrong Password')
  }

  toggleCollapse = () => { this.setState({ isOpen: !this.state.isOpen }) }

  render() {
    return (
      <div className='login'>
        <MDBNavbar color="unique-color-dark" dark expand="md">
          <MDBNavbarBrand onClick={() => this.props.history.push('/')}>
            <FoodLogo width={50} height={50}/>
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
                    <MDBNavLink to="/signup">Register</MDBNavLink>
                }
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <MDBContainer>
          <MDBRow>
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
                  <MDBBtn color="primary" onClick={this.handleSubmit}>Login <i class="fas fa-sign-in-alt"></i></MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div >
    )
  }
}

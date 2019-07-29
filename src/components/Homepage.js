import React, { useState, Fragment } from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn
} from 'mdbreact';
import { ReactComponent as FoodLogo } from './restaurant.svg'

const Homepage = props => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => { setIsOpen(!isOpen) }

  return (
    <div className='homepage'>
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <FoodLogo width={50} height={50} />
        </MDBNavbarBrand>

        <MDBNavbarNav left>
          <MDBBtn size="sm" color="primary" onClick={() => props.history.push('/map')}>Browse Map</MDBBtn>
        </MDBNavbarNav>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>


          <MDBNavbarNav center>
            <MDBNavItem>
              <MDBNavbarBrand>
                <Fragment>International Food Index</Fragment>
              </MDBNavbarBrand>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" >
                <MDBIcon fab icon="fas fa-react" />
              </MDBNavLink>
            </MDBNavItem>
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

            {
              localStorage.token ?
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret >
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" right>
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                :
                <MDBNavItem active>
                  <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
            }
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>



    </div>
  )
}

export default Homepage
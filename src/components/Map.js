import React, { useState } from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api'
import MarkersContainer from '../containers/MarkersContainer';
import styles from './Map.json'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn
} from 'mdbreact';
import { ReactComponent as FoodLogo } from './restaurant.svg'

const Map = props => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => { setIsOpen(!isOpen) }

  const logOutButtonOnClick = () => { localStorage.clear() }

  return (
    <div>
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand onClick={() => props.history.push('/')}>
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

            {
              localStorage.token ?
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret >
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" right>
                      <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                      <MDBDropdownItem href="/" onClick={logOutButtonOnClick}>Log Out</MDBDropdownItem>
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

      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyCDqYru3D32INEjCkIOPB48OqjEWksoAXI"
      >
        <GoogleMap
          id='world-map'
          clickableIcons={true}
          mapContainerStyle={{
            height: "92vh",
            width: "100vw",
          }}
          zoom={3}
          center={{
            lat: 28.435665,
            lng: 14.648057
          }}
        >
          <MarkersContainer userInfo={props.userInfo} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map
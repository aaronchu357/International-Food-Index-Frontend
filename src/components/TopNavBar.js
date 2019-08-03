import React, { useState } from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn, MDBTooltip, MDBFormInline, MDBNotification
} from 'mdbreact';
import { ReactComponent as FoodLogo } from './restaurant.svg'
import ToggleSwitch from './ToggleSwitch'

const TopNavBar = props => {

  const [isOpen, setIsOpen] = useState(false)
  const [searchInput, setSeachInput] = useState('')
  const [searchIconClicked, setSearchIconClicked] = useState(false)

  const toggleCollapse = () => { setIsOpen(!isOpen) }
  const handleSearchInput = e => {
    e.preventDefault()
    setSeachInput(e.target.value)
  }
  const logOutButtonOnClick = () => { localStorage.clear() }

  return (
    <div className='homepage'>
      <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand onClick={() => props.history.push('/')}>
          <FoodLogo width={50} height={50} />
        </MDBNavbarBrand>

        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBBtn size="sm" color="primary" onClick={() => props.history.push('/')} disabled={window.location.href === "http://localhost:3001/" ? true : false}>International Food Index</MDBBtn>
          </MDBNavItem>

          <MDBTooltip
            placement="right"
          >
            <MDBBtn size="sm" color="primary" onClick={() => props.history.push('/map')} disabled={window.location.href === "http://localhost:3001/map" ? true : false}>Browse Map</MDBBtn>
            <div>Sup</div>
          </MDBTooltip>
        </MDBNavbarNav>

        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>

          {
            window.location.href !== "http://localhost:3001/map" ?
              <MDBNavbarNav right>
                {/* <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="/about" >
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
                </MDBNavItem> */}
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="/about">
                    <MDBIcon icon="fas fa-share-alt" />
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
                      <MDBNavLink to={props.navPath}>{props.buttonName}</MDBNavLink>
                    </MDBNavItem>
                }
              </MDBNavbarNav>
              :
              <MDBNavbarNav right>

                {
                  searchIconClicked ?
                    <MDBNavItem>
                      <MDBFormInline waves onSubmit={(e) => props.handleSearchFormOnSubmit(e, searchInput)}>
                        <div className="md-form my-0">
                          <input className="form-control mr-sm-2" type="text" placeholder="Search Country" aria-label="Search" value={searchInput} onChange={handleSearchInput} />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                    :
                    null
                }
                <MDBNavItem onClick={() => setSearchIconClicked(!searchIconClicked)}>
                  <MDBNavLink className="waves-effect waves-light">
                    <i className="fas fa-search-location"></i>
                  </MDBNavLink>
                </MDBNavItem>

                <ToggleSwitch
                  isOn={props.toggleSwitchOn}
                  onColor="#06D6A0"
                  handleToggle={props.handleToggleSwitchClick}
                />

                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="/about">
                    <MDBIcon icon="fas fa-share-alt" />
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
                      <MDBNavLink to={props.navPath}>{props.buttonName}</MDBNavLink>
                    </MDBNavItem>
                }
              </MDBNavbarNav>
          }

        </MDBCollapse>
      </MDBNavbar>
    </div >
  )
}

export default TopNavBar
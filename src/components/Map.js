import React, { useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import MarkersContainer from '../containers/MarkersContainer';
import TopNavBar from './TopNavBar'
import style from './Map.json'

const Map = props => {

  const [locationCoordinates, setLocationCoordinates] = useState([])
  const [initialLocationCoordinates, setInitialLocationCoordinates] = useState({ lat: 28.435665, lng: 14.648057 })
  const [initialZoomLevel, setInitialZoomLevel] = useState(3)
  const [searchedLocationCoordinates, setSearchedLocationCoordinates] = useState('')
  const [searchedZoomLevel, setSearchedZoomLevel] = useState(0)
  const [toggleSwitchOn, setToggleSwitchOn] = useState(false)

  const handleSearchFormOnSubmit = (e, searchInput) => {
    e.preventDefault()
    let foundLocation = locationCoordinates.find(location => location.attributes.name.toLowerCase().includes(searchInput.toLowerCase()))
    setSearchedLocationCoordinates({ lat: parseFloat(foundLocation.attributes.latitude), lng: parseFloat(foundLocation.attributes.longitude) })
    setSearchedZoomLevel(6)
  }

  const handleToggleSwitchClick = () => setToggleSwitchOn(!toggleSwitchOn)

  const addLocationCoordinates = (locationsInfo) => { setLocationCoordinates(locationsInfo) }

  return (
    <div>
      <TopNavBar {...props} buttonName={"Login"} navPath={"/login"} handleSearchFormOnSubmit={handleSearchFormOnSubmit} handleToggleSwitchClick={handleToggleSwitchClick} toggleSwitchOn={toggleSwitchOn}/>

      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyCDqYru3D32INEjCkIOPB48OqjEWksoAXI"
      >
        <GoogleMap
          id='world-map'
          options={toggleSwitchOn ? { styles: null } : { styles: style }}
          clickableIcons={true}
          mapContainerStyle={{
            height: "94vh",
            width: "100vw",
          }}
          zoom={searchedZoomLevel ? searchedZoomLevel : initialZoomLevel}
          center={searchedLocationCoordinates ? searchedLocationCoordinates : initialLocationCoordinates}
        >
          <MarkersContainer userInfo={props.userInfo} addLocationCoordinates={addLocationCoordinates} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map
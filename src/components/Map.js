import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import MarkersContainer from '../containers/MarkersContainer';
import styles from './Map.json'
import TopNavBar from './TopNavBar'

const Map = props => {
  return (
    <div>
      <TopNavBar {...props} buttonName={"Login"} navPath={"/login"}/>

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
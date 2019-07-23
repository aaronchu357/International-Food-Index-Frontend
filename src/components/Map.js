import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import MarkersContainer from '../containers/MarkersContainer';


class Map extends Component {
  render() {
    return (
      <div>
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyCDqYru3D32INEjCkIOPB48OqjEWksoAXI"
        >
          <GoogleMap
            id='world-map'
            mapContainerStyle={{
              height: "99vh",
              width: "100vw"
            }}
            zoom={2}
            center={{
              lat: 0,
              lng: -180
            }}
          >
            <MarkersContainer />
          </GoogleMap>
        </LoadScript>
      </div>
    )
  }
}

export default Map
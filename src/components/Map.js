import React, { Component } from 'react'
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api'
import MapMarker from './MapMarker'
import MapInfoWindow from './MapInfoWindow';


class Map extends Component {
  state = {
    locationCoordinates: [],
    locationInfo: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/locations')
      .then(resp => resp.json())
      .then(locations => {
        locations.data.map(location => {
          this.setState({ locationCoordinates: [...this.state.locationCoordinates, location] })
        })
      })
  }

  handleMarkerOnClick = (locationInfo) => {
    // let dishesData = locationInfo.relationships.national_dishes.data.map(dish => {
    //   debugger
    //     fetch(`http://localhost:3000/national_dishes/${dish.id}`)
    //       // Promise is not parsing
    //       .then(resp => resp.json())
    //       .then(dishData => {
    //         debugger
    //         return dishData.data
    //       })
    // })
    this.setState({
      locationInfo: locationInfo
    })
  }

  handleInfoWindowCloseClick = () => {
    this.setState({
      locationInfo: null
    })
  }

  render() {
    let generateMarkers = this.state.locationCoordinates.map(location => <MapMarker location={location} handleMarkerOnClick={this.handleMarkerOnClick} />)
    let generateInfoWindow = <MapInfoWindow locationInfo={this.state.locationInfo} handleInfoWindowCloseClick={this.handleInfoWindowCloseClick}/>
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
            {generateMarkers}
            {this.state.locationInfo ? generateInfoWindow : null}
          </GoogleMap>
        </LoadScript>
      </div>
    )
  }
}

export default Map
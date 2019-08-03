import React, { Component } from 'react'
import MapMarker from '../components/MapMarker'
import MapInfoWindow from '../components/MapInfoWindow';

// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(require.context('./svg', false, /\.(png|jpe?g|svg)$/));

class MarkersContainer extends Component {

  state = {
    locationCoordinates: [],
    locationInfo: null,
    locationDishes: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/locations')
      .then(resp => resp.json())
      .then(locations => {
        locations.data.map(location => {
          return this.setState({ locationCoordinates: [...this.state.locationCoordinates, location] })
        })
      })
  }

  componentDidUpdate(prevState) {
    if (this.state.locationCoordinates !== prevState.locationCoordinates) {
      this.props.addLocationCoordinates(this.state.locationCoordinates)
    }
  }

  handleMarkerOnClick = (locationInfo) => {
    fetch(`http://localhost:3000/locations/${locationInfo.id}`)
      .then(resp => resp.json())
      .then(locationData => {
        let dishes = []
        locationData.data.attributes.national_dishes.map(dish => dishes.push(dish))
        this.setState({
          locationInfo: locationInfo,
          locationDishes: dishes
        })
      })
  }

  handleInfoWindowCloseClick = () => {
    this.setState({
      locationInfo: null
    })
  }

  // getMarkerIcon = () => {
  //   let imageFileFinal = undefined
  //   debugger
  //   images.map(image => {
  //     let imageFileInitial = image
  //     let imageFileCountryName = image.split('.')[0].split('/').pop()
  //     if (imageFileCountryName === this.state.locationCoordinates.attributes.name.toLowerCase().join("-")) {
  //       debugger
  //       imageFileFinal = imageFileInitial
  //     }
  //   })
  //   return imageFileFinal
  // }

  render() {
    const generateMarkers = this.state.locationCoordinates.map(location => <MapMarker location={location} handleMarkerOnClick={this.handleMarkerOnClick} />)
    const generateInfoWindow = <MapInfoWindow locationDishes={this.state.locationDishes} locationInfo={this.state.locationInfo} handleInfoWindowCloseClick={this.handleInfoWindowCloseClick} userInfo={this.props.userInfo} />
    return (
      <div className='markers-container' >
        {generateMarkers}
        {this.state.locationInfo ? generateInfoWindow : null}
      </div>
    )
  }
}

export default MarkersContainer
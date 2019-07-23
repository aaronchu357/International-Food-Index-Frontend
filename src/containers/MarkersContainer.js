import React, { Component } from 'react'
import MapMarker from '../components/MapMarker'
import MapInfoWindow from '../components/MapInfoWindow';

class MarkersContainer extends Component {
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
    const generateMarkers = this.state.locationCoordinates.map(location => <MapMarker location={location} handleMarkerOnClick={this.handleMarkerOnClick} />)
    const generateInfoWindow = <MapInfoWindow locationInfo={this.state.locationInfo} handleInfoWindowCloseClick={this.handleInfoWindowCloseClick}/>
    return (
      <div className='markers-container' >
        {generateMarkers}
        {this.state.locationInfo ? generateInfoWindow : null}
      </div>
    )
  }
}

export default MarkersContainer
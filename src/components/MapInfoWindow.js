import React, { Component, Fragment, useState } from 'react'
import { InfoWindow } from '@react-google-maps/api'
import NationalDishExpandedDetails from './NationalDishExpandedDetails'
import NationalDishContainer from '../containers/NationalDishContainer'

class MapInfoWindow extends Component {

  state = {
    dishes: [],
    nationalDishClicked: false,
    nationalDishSelected: [],
    modalShow: false
  }

  componentDidMount() {
    let dishesId = this.props.locationInfo.relationships.national_dishes.data.map(dish => dish.id)
    fetch('http://localhost:3000/national_dishes')
      .then(resp => resp.json())
      .then(dishes => {
        let foundDishes = dishes.data.filter(dish => {
          return dishesId.includes(dish.id)
        })
        this.setState({ dishes: [...foundDishes] })
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.locationInfo !== prevProps.locationInfo) {
      let dishesId = this.props.locationInfo.relationships.national_dishes.data.map(dish => dish.id)
      fetch('http://localhost:3000/national_dishes')
        .then(resp => resp.json())
        .then(dishes => {
          let foundDishes = dishes.data.filter(dish => {
            return dishesId.includes(dish.id)
          })
          this.setState({ dishes: [...foundDishes] })
        })
    }
  }

  handhandleNationalDishOnClick = (dishData) => {
    this.setState({
      nationalDishClicked: true,
      nationalDishSelected: dishData
    })
  }

  setModalShow = (boolean) => {
    this.setState({modalShow: boolean})
  }

  render() {
    return (
      <>
        <InfoWindow
          position={{ lat: parseFloat(this.props.locationInfo.attributes.latitude), lng: parseFloat(this.props.locationInfo.attributes.longitude) }}
          onCloseClick={this.props.handleInfoWindowCloseClick}
        >
          <div style={{
            background: 'white',
            padding: 15,
            maxWidth: 300,
            maxHeight: 200,
          }}>
            <h1>{this.props.locationInfo.attributes.name}</h1>
            {!!this.state.dishes ? <NationalDishContainer dishes={this.state.dishes} handhandleNationalDishOnClick={this.handhandleNationalDishOnClick} setModalShow={this.setModalShow}/> : <div>Loading...</div>}
          </div>
        </InfoWindow> 
        {this.state.nationalDishClicked ? <NationalDishExpandedDetails nationalDishSelected={this.state.nationalDishSelected} show={this.state.modalShow} onHide={() => this.setModalShow(false)}/> : null}
      </>
    )
  }
}

export default MapInfoWindow
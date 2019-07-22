import React, { Component, useState, useEffect, Fragment } from 'react'
import { InfoWindow } from '@react-google-maps/api'
import NationalDish from './NationalDish'
import NationalDishContainer from '../containers/NationalDishContainer'

class MapInfoWindow extends Component {

  state = {
    dishes: []
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

  render() {
    return (
      <>
        <InfoWindow
          position={{ lat: parseFloat(this.props.locationInfo.attributes.latitude), lng: parseFloat(this.props.locationInfo.attributes.longitude) }}
          onCloseClick={this.props.handleInfoWindowCloseClick}
        >
          <div style={{
            background: `white`,
            border: `1px solid #ccc`,
            padding: 15,
            maxWidth: 200,
            maxHeight: 400
          }}>
            <h1>{this.props.locationInfo.attributes.name}</h1>
            <NationalDishContainer dishes={this.state.dishes} />
          </div>
        </InfoWindow>
      </>
    )
  }
}

export default MapInfoWindow
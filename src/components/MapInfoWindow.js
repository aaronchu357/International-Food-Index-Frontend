import React, { Component, Fragment } from 'react'
import { InfoWindow } from '@react-google-maps/api'
import NationalDishExpandedDetails from './NationalDishExpandedDetails'
import NationalDishContainer from '../containers/NationalDishContainer'

class MapInfoWindow extends Component {

  state = {
    nationalDishClicked: false,
    nationalDishSelected: [],
    modalShow: false,
    modalCommentShow: false
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
    this.setState({ modalShow: boolean })
  }

  setCommentModalShow = (boolean) => {
    this.setState({ modalCommentShow: boolean })
  }

  render() {
    return (
      <Fragment>
        <InfoWindow
          position={{ lat: parseFloat(this.props.locationInfo.attributes.latitude), lng: parseFloat(this.props.locationInfo.attributes.longitude) }}
          onCloseClick={this.props.handleInfoWindowCloseClick}
        >
          <div style={{
            background: 'white',
            padding: 15,
            maxWidth: 400,
            maxHeight: 250,
          }}>
            <h1>{this.props.locationInfo.attributes.name}</h1>
            <NationalDishContainer dishes={this.props.locationDishes} handhandleNationalDishOnClick={this.handhandleNationalDishOnClick} setModalShow={this.setModalShow} />
          </div>
        </InfoWindow>
        {this.state.nationalDishClicked ? <NationalDishExpandedDetails nationalDishSelected={this.state.nationalDishSelected} addComment={this.addComment} show={this.state.modalShow} onHide={() => this.setModalShow(false)} userInfo={this.props.userInfo} /> : null}
      </Fragment>
    )
  }
}

export default MapInfoWindow
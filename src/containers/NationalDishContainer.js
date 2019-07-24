import React from 'react'
import NationalDish from '../components/NationalDish'

class NationalDishContainer extends React.Component {


  render() {
    const generateDishes = this.props.dishes.map(dish => {
      return (
        <NationalDish dishData={dish} handhandleNationalDishOnClick={this.props.handhandleNationalDishOnClick} setModalShow={this.props.setModalShow} />
      )
    })
    return (
      <div className={'national-dishes-container'} >
        {generateDishes}
      </div>
    )
  }
}

export default NationalDishContainer
import React from 'react'
import NationalDish from '../components/NationalDish'

const NationalDishContainer = (props) => {
  const generateDishes = props.dishes.map(dish => {
    return (
      <NationalDish dishData={dish} handhandleNationalDishOnClick={props.handhandleNationalDishOnClick} setModalShow={props.setModalShow} />
    )
  })
  return (
    <div className={'national-dishes-container'} > 
      {generateDishes}
    </div>
  )
}

export default NationalDishContainer
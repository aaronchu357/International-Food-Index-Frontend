import React from 'react'
import NationalDish from '../components/NationalDish'

const NationalDishContainer = (props) => {
  const generateDishes = props.dishes.map(dish => {
    return (
      <NationalDish dishData={dish} />
    )
  })
  return (
    <ul>
      {generateDishes}
    </ul>
  )
}

export default NationalDishContainer
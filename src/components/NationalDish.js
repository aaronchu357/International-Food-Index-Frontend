import React from 'react'
import Button from 'react-bootstrap/Button'

const NationalDish = (props) => {

  const handleNationalDishOnClick = () => {
    props.handhandleNationalDishOnClick(props.dishData)
  }

  return (
    <div class='national-dish' onClick={handleNationalDishOnClick}>
      <img src={props.dishData.attributes.image} alt='Sorry, Not Found' width={85} height={50} />
      <h4>{props.dishData.attributes.name}</h4>
      <p>{props.dishData.attributes.description}</p>
      <Button className="btn national-dish-info" data-toggle="modal" data-target="#myModal" onClick={() => props.setModalShow(true)}>See Recipes</Button>
    </div>
  )
}

export default NationalDish
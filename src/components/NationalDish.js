import React from 'react'
import Button from 'react-bootstrap/Button'

const NationalDish = props => {
  return (
    <div className='national-dish' onClick={() => props.handhandleNationalDishOnClick(props.dishData)}>
      <h4>{props.dishData.name}</h4>
      <img src={props.dishData.image} alt='Sorry, Not Found' width={85} height={50} />
      <br />
      <p>{props.dishData.description.substring(0, 175)}...</p>
      <Button className="btn national-dish-recipes" data-toggle="modal" data-target="#myModal" onClick={() => props.setModalShow(true)}>More Details</Button>
    </div>
  )
}

export default NationalDish
import React from 'react'
import { MDBBtn, MDBView } from 'mdbreact'

const NationalDish = props => {
  return (
    <div className='national-dish' onClick={() => props.handhandleNationalDishOnClick(props.dishData)}>
      <h4>{props.dishData.name}</h4>
      <MDBView hover zoom>
      <img src={props.dishData.image} alt='Sorry, Not Found' width={100} height={100} />
      </MDBView>
      <br />
      <p>{props.dishData.description.substring(0, 175)}...</p>
      <MDBBtn size="md" color="grey" onClick={() => props.setModalShow(true)}>More Details</MDBBtn>
    </div>
  )
}

export default NationalDish
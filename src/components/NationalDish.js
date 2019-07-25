import React from 'react'
import Button from 'react-bootstrap/Button'

class NationalDish extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.dishes !== prevProps.dishes) {

    }
  }

  handleNationalDishOnClick = () => {
    this.props.handhandleNationalDishOnClick(this.props.dishData)
  }

  render() {
    return (
      <div className='national-dish' onClick={this.handleNationalDishOnClick}>
        <h4>{this.props.dishData.attributes.name}</h4>
        <img src={this.props.dishData.attributes.image} alt='Sorry, Not Found' width={85} height={50} />
        <br/>
        <Button className="btn national-dish-recipes" data-toggle="modal" data-target="#myModal" onClick={() => this.props.setModalShow(true)}>More Details</Button>
      </div>
    )
  }
}

export default NationalDish
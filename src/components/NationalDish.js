import React, { Component } from 'react'

export default class NationalDish extends Component {

  state = {
    clicked: false
  }

  render() {
    return (
      <li>
        <img src={this.props.dishData.attributes.image} alt='Not Found' width={50} height={50}/>
        <h3>{this.props.dishData.attributes.name}</h3>
        <h4>{this.props.dishData.attributes.description}</h4>
      </li>
    )
  }
}
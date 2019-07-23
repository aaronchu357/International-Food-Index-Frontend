import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react'
import RecipeIframe from './RecipeIframe'

class NationalDishExpandedDetails extends Component {

  
  render() {
    let nationalDishName = this.props.nationalDishSelected.attributes.name.replace(/\s+/g, '-').toLowerCase()
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.nationalDishSelected.attributes.name} Recipes
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RecipeIframe source={`https://www.google.com/search?q=${nationalDishName}-recipe`}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default NationalDishExpandedDetails
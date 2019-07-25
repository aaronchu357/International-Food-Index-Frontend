import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import React, { Component } from 'react'
import RecipeIframe from './RecipeIframe'
import CommentsContainer from '../containers/CommentsContainer'

class NationalDishExpandedDetails extends Component {

  render() {
    let nationalDishName = this.props.nationalDishSelected.attributes.name.replace(/\s+/g, '%20').toLowerCase()
    
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Tabs defaultActiveKey="recipe" id="uncontrolled-tab-example">

            <Tab eventKey="recipe" title="Recipe">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {this.props.nationalDishSelected.attributes.name} Recipes
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <RecipeIframe source={`https://www.bing.com/search?q=${nationalDishName}%20recipe`} />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Tab>

            <Tab eventKey="description" title="Description">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {this.props.nationalDishSelected.attributes.name} 
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.props.nationalDishSelected.attributes.description}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Tab>

            <Tab eventKey="comment" title="Comment">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {this.props.nationalDishSelected.attributes.name} Comments
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>
                <CommentsContainer nationalDishSelected={this.props.nationalDishSelected} userInfo={this.props.userInfo}/>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Tab>

          </Tabs>
        </Modal>
      </div>
    )
  }
}

export default NationalDishExpandedDetails
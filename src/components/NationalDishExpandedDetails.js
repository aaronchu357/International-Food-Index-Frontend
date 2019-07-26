import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import React from 'react'
import RecipeIframe from './RecipeIframe'
import CommentsContainer from '../containers/CommentsContainer'

const NationalDishExpandedDetails = props => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">

          <Tab eventKey="description" title="Description">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {props.nationalDishSelected.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.nationalDishSelected.description}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Tab>

          <Tab eventKey="recipe" title="Recipe">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {props.nationalDishSelected.name} Recipes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RecipeIframe source={`https://www.bing.com/search?q=${props.nationalDishSelected.name.replace(/\s+/g, '%20').toLowerCase()}%20recipe`} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Tab>

          <Tab eventKey="comment" title="Comment">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {props.nationalDishSelected.name} Comments
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ 'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto' }}>
              <CommentsContainer nationalDishSelected={props.nationalDishSelected} userInfo={props.userInfo} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Tab>

        </Tabs>
      </Modal>
    </div>
  )
}

export default NationalDishExpandedDetails
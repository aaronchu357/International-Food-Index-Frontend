import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import React from 'react'
import RecipeIframe from './RecipeIframe'
import CommentsContainer from '../containers/CommentsContainer'

const NationalDishExpandedDetails = props => {
  return (
    <div>
      <MDBContainer>
        <MDBModal isOpen={props.show} toggle={props.onHide} centered {...props} size="lg">
          <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">

            <Tab eventKey="description" title="Description">
              <MDBModalHeader toggle={props.onHide}>{props.nationalDishSelected.name}</MDBModalHeader>
              <MDBModalBody>
                {props.nationalDishSelected.description}
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="primary" onClick={props.onHide}>Close</MDBBtn>
              </MDBModalFooter>
            </Tab>

            <Tab eventKey="recipe" title="Recipe">
              <MDBModalHeader toggle={props.onHide}>{props.nationalDishSelected.name} Recipes</MDBModalHeader>
              <MDBModalBody>
                <RecipeIframe source={`https://www.bing.com/videos/search?q=${props.nationalDishSelected.name.replace(/\s+/g, '%20').toLowerCase()}%20recipe`} />
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="primary" onClick={props.onHide}>Close</MDBBtn>
              </MDBModalFooter>
            </Tab>

            <Tab eventKey="comment" title="Comment">
              <MDBModalHeader toggle={props.onHide}>{props.nationalDishSelected.name} Comments</MDBModalHeader>
              <MDBModalBody style={{ 'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto' }}>
                <CommentsContainer nationalDishSelected={props.nationalDishSelected} userInfo={props.userInfo} />
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="primary" onClick={props.onHide}>Close</MDBBtn>
              </MDBModalFooter>
            </Tab>

          </Tabs>
        </MDBModal>
      </MDBContainer>
    </div>
  )
}

export default NationalDishExpandedDetails
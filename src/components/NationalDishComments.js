import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react'

class NationalDishComments extends Component {

  state = {
    comments: []
  }
  
  componentDidMount() {
    fetch(`http://localhost:3000/national_dishes/${this.props.nationalDishSelected.id}`)
      .then(resp => resp.json())
      .then(nationalDish => {
        this.setState({comments: nationalDish.data.relationships.comments.data})
      })
  }

  render() {
    const generateComments = () => {
      this.state.comments.map(comment => {
        return(
          <div>
            <div>Rating: {comment.rating}</div>
            <div>{comment.content}</div>
          </div>
        )
      })
    }
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
              Comments
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {generateComments}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.addComment}>Add Comment</Button>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default NationalDishComments
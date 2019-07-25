import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react'

export default class NewCommentForm extends Component {

  state = {
    content: '',
    rating: '1'
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.handleCommentFormSubmit(this.state)
  }

  handleContent = (e) => {
    this.setState({ content: e.target.value })
  }

  handleChange = (e) => {
    this.setState({ rating: e.target.value })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows="3" name='content' onChange={this.handleContent} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Rating</Form.Label>
            <Form.Control as="select" name='rating' onChange={this.handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
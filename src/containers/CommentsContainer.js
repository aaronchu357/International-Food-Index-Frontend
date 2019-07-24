import React, { Component } from 'react'
import NewCommentForm from '../forms/NewCommentForm'
import Comment from '../components/Comment'

export default class CommentsContainer extends Component {

  state = {
    comments: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/national_dishes/${this.props.nationalDishSelected.id}`)
      .then(resp => resp.json())
      .then(nationalDish => {
        let allComments = []
        nationalDish.data.relationships.comments.data.map(comment => {
          allComments.push(comment.id)
        })
        this.setState({ comments: allComments })
      })
  }

  handleCommentFormSubmit = (commentInfo) => {
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: parseInt(this.props.userInfo.id),
        national_dish_id: parseInt(this.props.nationalDishSelected.id),
        content: commentInfo.content,
        rating: parseInt(commentInfo.rating)
      })
    })
      .then(resp => resp.json())
      .then(commentInfo => {
        this.setState({ comments: [...this.state.comments, commentInfo.data.id] })
      })
  }

  render() {
    const generateComments = this.state.comments.map(commentId => {
      return (
        <Comment commentId={commentId} userInfo={this.props.userInfo}/>
      )
    })

    return (
      <div>
        {generateComments}
        <NewCommentForm handleCommentFormSubmit={this.handleCommentFormSubmit}/>
      </div >
    )
  }
}
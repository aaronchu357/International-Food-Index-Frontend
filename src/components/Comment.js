import React, { Component } from 'react'

export default class Comment extends Component {

  state = {
    comment: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3000/comments/${this.props.commentId}`)
      .then(resp => resp.json())
      .then(commentInfo => {
        this.setState({ comment: commentInfo.data.attributes })
      })
  }

  render() {
    return (
      <div style={{ border: '8px solid yellowgreen', padding: '2%' }}>
        <div>{this.state.comment ? this.state.comment.user.username : null}</div>
        <div>Rating: {this.state.comment.rating}</div>
        <div>{this.state.comment.content}</div>
      </div>
    )
  }
}
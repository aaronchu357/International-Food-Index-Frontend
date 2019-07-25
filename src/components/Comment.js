import React, { Component } from 'react'

export default class Comment extends Component {

  state = {
    comment: {}
  }

  componentDidMount() {
    fetch(`http://localhost:3000/comments/${this.props.commentId}`)
      .then(resp => resp.json())
      .then(commentInfo => {
        this.setState({comment: commentInfo.data.attributes})
      })
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.locationInfo !== prevProps.locationInfo) {
  // }

  render() {
    return (
      <div style={{border: '8px solid yellowgreen', padding: '2%'}}>
        <div>{this.props.userInfo.attributes.username}</div>
        <div>Rating: {this.state.comment.rating}</div>
        <div>{this.state.comment.content}</div>
      </div>
    )
  }
}
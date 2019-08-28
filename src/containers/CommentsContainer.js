import React, { Component } from 'react'
import NewCommentForm from '../forms/NewCommentForm'
import Comment from '../components/Comment'
import { NavLink } from 'react-router-dom'

export default class CommentsContainer extends Component {

  state = {
    comments: [],
    alreadyCommented: false
  }

  componentDidMount() {
    console.log('comment container mount')
    fetch(`/national_dishes/${this.props.nationalDishSelected.id}`)
      .then(resp => resp.json())
      .then(nationalDish => {
        let allComments = []
        nationalDish.data.attributes.comments.map(comment => allComments.push(comment))
        if (localStorage.token) {
          !!allComments.find(comment => comment.user_id === this.props.userInfo.id) ? this.setState({ comments: allComments, alreadyCommented: true }) : this.setState({ comments: allComments })
        } else {
          this.setState({ comments: allComments, alreadyCommented: true })
        }
      })
  }

  handleCommentFormSubmit = (commentInfo) => {
    fetch('/comments', {
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
        this.setState(prevState => {
          return { comments: [...prevState.comments, commentInfo.data], alreadyCommented: true }
        })
      })
  }

  render() {
    const generateComments = this.state.comments.map(comment => <Comment commentId={comment.id} userInfo={this.props.userInfo} />)
    return (
      <div>
        {generateComments}
        {this.state.alreadyCommented ? null : <NewCommentForm handleCommentFormSubmit={this.handleCommentFormSubmit} />}
        {localStorage.token ? null : <h4><NavLink to='/login'>Login</NavLink> or <NavLink to='/signup'>Signup</NavLink> to comment on this dish.</h4>}
      </div >
    )
  }
}
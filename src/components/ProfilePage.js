import React, { Component } from 'react'
import TopNavBar from './TopNavBar'

class ProfilePage extends Component {

  state = {
    userComments: [],
    userNationalDishes: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.userInfo !== prevProps.userInfo) {
      fetch(`http://localhost:3000/comments`)
        .then(resp => resp.json())
        .then(commentsData => {
          let userId = this.props.userInfo.id
          let foundComments = commentsData.data.filter(comment => comment.attributes.user.id === userId)
          this.setState({ userComments: foundComments })
        })
    }
  }

  handleButtonClick = (e, commentId) => {
    if (e.target.name === 'edit') {
      console.log("edit")
      alert("Working on it!!!")
    } else if (e.target.name === 'delete') {
      fetch(`http://localhost:3000/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      window.location.reload()
    }
  }

  render() {
    const generateUserComments = this.state.userComments.map(comment => {
      return (
        <div>
          <h6>National Dish: {comment.attributes.national_dish.name}</h6>
          <h6>Rating: {comment.attributes.rating}</h6>
          <h6>Content: {comment.attributes.content}</h6>

          <button type='button' name='edit' onClick={(e) => this.handleButtonClick(e, comment.id)}>Edit</button>
          <button type='button' name='delete' onClick={(e) => this.handleButtonClick(e, comment.id)}>Delete</button>
        </div>
      )
    })
    return (
      <div className='profile-page'>
        <TopNavBar {...this.props} buttonName={"Login"} navPath={"/login"} />
        WORK IN PROGRESS:
        <h4>My Comments:</h4>
        {generateUserComments}
      </div>
    )
  }
}

export default ProfilePage
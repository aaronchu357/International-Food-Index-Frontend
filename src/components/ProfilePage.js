import React, { Component } from 'react'

class ProfilePage extends Component {

  state = {
    userComments: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.userInfo !== prevProps.userInfo) {
      fetch(`http://localhost:3000/users/${this.props.userInfo.id}`)
        .then(resp => resp.json())
        .then(userData => {
          let foundComments = []
          userData.data.attributes.comments.map(comment => foundComments.push(comment))
          this.setState({ userComments: foundComments })
        })
    }
  }

  render() {
    const generateUserComments = this.state.userComments.map(comment => {
      return (
        <div>
          <h6>Rating: {comment.rating}</h6>
          <h6>Content: {comment.content}</h6>
        </div>
      )
    })
    return (
      <div className='profile-page'>
        <h4>List of Comments:</h4>
        {generateUserComments}
      </div>
    )
  }
}

export default ProfilePage
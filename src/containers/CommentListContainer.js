// import React, { Component } from 'react'
// import Comment from '../components/Comment'

// export default class CommentListContainer extends Component {

//   state = {
//     comments: []
//   }

//   componentDidMount() {
//     fetch(`http://localhost:3000/national_dishes/${this.props.nationalDishSelected.id}`)
//       .then(resp => resp.json())
//       .then(nationalDish => {
//         let allComments = []
//         nationalDish.data.relationships.comments.data.map(comment => {
//           allComments.push(comment.id)
//         })
//         this.setState({ comments: allComments })
//       })
//   }
  
//   componentDidUpdate(prevProps){
//     if (this.props.newComment !== prevProps.newComment) {
//       this.setState({ comments: [...this.state.comments, this.props.newComment] })
//     }
//   }

//   render() {
//     debugger
//     const generateComments = this.state.comments.map(commentId => {
//       debugger
//       return (
//         <Comment commentId={commentId} userInfo={this.props.userInfo}/>
//       )
//     })
//     return (
//       {generateComments}
//     )
//   }
// }
import React from 'react'
import NationalDish from '../components/NationalDish'

class NationalDishContainer extends React.Component {

  // state = {
  //   dishes: []
  // }

  // componentDidMount() {
  //   this.setState({dishes: []})
  // }

  // componentDidUpdate(prevProps) {
  //   if(this.props.dishes !== prevProps.dishes){
  //     this.setState({dishes: this.props.dishes})
  //   }
  // }

  render() {
    const generateDishes = this.props.dishes.map(dish => {
      return (
        <NationalDish dishData={dish} handhandleNationalDishOnClick={this.props.handhandleNationalDishOnClick} setModalShow={this.props.setModalShow} />
      )
    })
    return (
      <div className={'national-dishes-container'} >
        {this.props.dishes.length === 0 ? <img src={"https://upload.wikimedia.org/wikipedia/commons/f/f9/500px-Xmas_tree_animated.gif"} alt='Sorry, Not Found' width={100} height={100} /> : generateDishes}
      </div>
    )
  }
}

export default NationalDishContainer
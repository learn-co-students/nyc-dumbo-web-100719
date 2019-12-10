import React from 'react';
import LikeButton from './LikeButton'

class Message extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     numberOfLikes: 0
  //   }
  //   // const boundCopyOfOnClick = this.onClick.bind(this)
  //   // this.onClick = boundCopyOfOnClick;
  //   this.onClick = this.onClick.bind(this)
  // } 

  state = {
    numberOfLikes: 0,
    potato: true
  }

  incrementLikes = (event) => {
    // console.log(event)
    // console.log(event.target)
    // console.log("hi mom")
    // console.log(this.state)
    // this.state.numberOfLikes++ // no! bad: directly mutates state 
    const newNumberOfLikes = this.state.numberOfLikes + 1;
    this.setState({
      numberOfLikes: newNumberOfLikes
    })
      // potato: true
    // }, () => {
    //   console.log("onClick", this.state)
    // })
    
    // console.log("onClick", this.state)

  }

  render(){
    // console.log("render", this.state)
    const { text } = this.props
    
    // const numberOfLikes = this.state.numberOfLikes
    return (<li>{ text } 
        <LikeButton increment={ this.incrementLikes } numberOfLikes={ this.state.numberOfLikes } />
      </li>)
  }

}

Message.defaultProps = {
  text: "Ork!",
}

export default Message


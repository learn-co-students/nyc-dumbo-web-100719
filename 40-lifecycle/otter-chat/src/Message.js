import React from 'react';
import LikeButton from './LikeButton'

class Message extends React.Component {

  state = {
    numberOfLikes: 0,
    potato: true
  }

  incrementLikes = (event) => {
    const newNumberOfLikes = this.state.numberOfLikes + 1;
    this.setState({
      numberOfLikes: newNumberOfLikes
    })
    
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


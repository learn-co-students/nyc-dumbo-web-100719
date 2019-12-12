import React from 'react';
import LikeButton from './LikeButton'

class Message extends React.Component {


  render(){
    // console.log("render", this.state)
    const { message } = this.props
    
    // const numberOfLikes = this.state.numberOfLikes
    return (<li>{ message.text } 
        <LikeButton updateLikes={ this.props.updateLikes } id={ message.id } numberOfLikes={ message.likes } />
      </li>)
  }

}

Message.defaultProps = {
  text: "Ork!",
}

export default Message


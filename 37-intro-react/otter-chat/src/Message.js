import React from 'react';

class Message extends React.Component {

  render(){
    // console.log(this.props)
    // console.log(this.props.text)
    // const allMessageData = this.props
    // const text = this.props.text
    const { text, numberOfLikes, heresAFunction } = this.props
    
    if (heresAFunction)
      heresAFunction("hihihihihihihih")

    return (<li>{ text } 
        <button>{ numberOfLikes }</button>
      </li>)
  }

}

Message.defaultProps = {
  text: "Ork!",
  numberOfLikes: 0,
}

export default Message


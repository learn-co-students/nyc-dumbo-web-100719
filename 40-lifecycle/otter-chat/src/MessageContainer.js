import React from 'react';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import uuid from 'uuid'


export default class MessageContainer extends React.Component {

  state = {

    messages: [
      {
        id: 1,
        text: "Purrrr!"
      },
      {
        id: 2,
        text: "Purrrr!"
      },
      {
        id: 3,
        text: "Purrrr!"
      },
      {
        id: 4,
        text: "Purrrr!"
      },
      {
        id: 5,
        text: "Hello good morning!"
      },
      {
        id: 6,
        text: "Ork!"
      },
    ]
  }

  newMessage = (messageText) => {
    // console.log(messageText)
    const newMessage = {
      id: uuid(), 
      text: messageText
    }
    this.setState({
      messages: [ ...this.state.messages, newMessage ]
    })
  }

  render(){
    return (<section className="MessageContainer">
      <h2>#tools</h2>
      <MessageList messages={ this.state.messages }  />
      <MessageForm newMessage={ this.newMessage } />
    </section>)
  }
  
}










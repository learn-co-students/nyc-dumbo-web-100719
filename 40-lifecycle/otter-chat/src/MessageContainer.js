import React from 'react';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import uuid from 'uuid'


export default class MessageContainer extends React.Component {

  state = {
    messages: []
  }

  updateLikes = (id) => {
    console.log(id)

    const messages = this.state.messages.map(message => {
        if (message.id === id) {
          return {
            ...message,
            likes: message.likes + 1,
          }
        } else {
          return message
        }
      })

    this.setState({
      messages: messages
    })
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

  componentDidMount() {
    // debugger
    fetch("http://localhost:3000/messages")
      .then(r => r.json())
      .then(data => this.setState({ messages: data }))

  }

  render(){
    console.log("I rendered", this.state.messages)
    return (<section className="MessageContainer">
      <h2>#tools</h2>
      <MessageList messages={ this.state.messages } 
                   updateLikes={ this.updateLikes } />
      <MessageForm newMessage={ this.newMessage } />
    </section>)
  }
  
}










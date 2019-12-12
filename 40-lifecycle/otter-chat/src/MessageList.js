import React from 'react';
import Message from './Message'

class MessageList extends React.Component {

  render(){
    const newArray = this.props.messages.map(message => 
      <Message key={ message.id } text={ message.text } />)

    return (<ol>
      {
        newArray
      }
    </ol>)
  }

}

export default MessageList 


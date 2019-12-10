import React from 'react';
import Message from './Message'

class MessageList extends React.Component {

  render(){
    return (<ol>
      <Message text="Helloooooo!" />
      <Message />
      <Message />
      <Message text="Hi hi hi." />
      <Message />
    </ol>)
  }

}

export default MessageList 


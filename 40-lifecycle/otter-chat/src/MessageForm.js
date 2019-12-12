import React from 'react';

const defaultState = {
  text: ""
}

export default class MessageForm extends React.Component {

  state = {
    ...defaultState
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
    // }, () => console.log(this.state.text))
  }

  onSubmit = (event) => {
    event.preventDefault()
    // event.target.reset() // no! not in react
    // console.log(this.props.newMessage)
    this.props.newMessage(this.state.text)
    this.setState({ ...defaultState })
  }

  render(){

    return (<form onSubmit={ this.onSubmit }>
        <ul>
          <li>
            <label htmlFor="message-text">Text:</label>
            <input type="text"
                   id="message-text"
                   onChange={ this.onChange }
                   value={ this.state.text }
                   name="text" />
          </li>
          <li>
            <input type="submit" />
          </li>
        </ul>
      </form>)
  }
  
}
import React from 'react';

class VegetableForm extends React.Component {

  state = {
    name: "sdfhsdjhfg",
    color: "#ff0000"
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createVegetable({
      name:  this.state.name,
      color: this.state.color
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // onChange = (event) => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }

  //   onChange = (event) => {
  //   this.setState({
  //     color: event.target.value
  //   })
  // }


  render(){
    return <form onSubmit={ this.onSubmit }>
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" type="text" value={ this.state.name } onChange={ this.onChange } />
        </li>
        <li>
          <label htmlFor="color">Color:</label>
          <input name="color" id="color" type="color" value={ this.state.color } onChange={ this.onChange } />
        </li>
        <li>
          <input type="submit" />
        </li>
      </ul>
    </form>
  }
}

export default VegetableForm
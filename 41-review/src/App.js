import React from 'react';
import './App.css';
import VegetableList from './VegetableList'
import VegetableForm from './VegetableForm'

class App extends React.Component {

  state = {
    vegetables: []
    
  }

  componentDidMount(){
    fetch("http://localhost:3000/vegetables")
      .then(res => res.json())
      .then(data => this.setState({
        vegetables: data
      }))
  }

  createVegetable = (vegetable) => {
    console.log(vegetable)
    const newStateObject = {
      vegetables: [ vegetable, ...this.state.vegetables ] 
    }
    this.setState(newStateObject)
  }

  render(){
    // console.log(this.state.vegetables)
    return (
      <div className="App">
        <VegetableForm createVegetable={ this.createVegetable } />
        <VegetableList vegetables={ this.state.vegetables } />
      </div>
    );
  }
}

export default App;

import React from 'react';

class VegetableForm extends React.Component {

  render(){
    return <form>
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" />
        </li>
        <li>
          <label htmlFor="color">Color:</label>
          <input id="color" type="color" />
        </li>
        <li>
          <input type="submit" />
        </li>
      </ul>
    </form>
  }
}

export default VegetableForm
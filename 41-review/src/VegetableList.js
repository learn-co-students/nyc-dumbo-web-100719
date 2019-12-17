import React from 'react';

const VegetableList = props => {
  return <ul>{
    [{ name: "Arugula", color: "green" }, { name: "Eggplant", color: "purple" }].map(vegetable => 
      (<li style={ { background: vegetable.color } }>
        { vegetable.name }
      </li>))
  }</ul>
}

export default VegetableList
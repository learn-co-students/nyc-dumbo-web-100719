import React from 'react';

const renderVegetable = vegetable => {
  return (<li key={ vegetable.id } style={ { background: vegetable.color } }>
    { vegetable.name }
  </li>)
}

const VegetableList = props => {
  // console.log(props.vegetables)
  return <ul>{ props.vegetables.map(renderVegetable) }</ul>
}

export default VegetableList
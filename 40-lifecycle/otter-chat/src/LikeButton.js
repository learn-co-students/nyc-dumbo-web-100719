import React, { Component } from 'react';


export default class LikeButton extends Component {

   otherFunction = () => {
    this.props.updateLikes(this.props.id)
  }
  render() {

    return (<button onClick={ this.otherFunction }>
      { this.props.numberOfLikes === 0 ? "no" : this.props.numberOfLikes }
      &nbsp;likes
    </button>)
  }
  
}

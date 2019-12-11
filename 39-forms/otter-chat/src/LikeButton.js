import React, { Component } from 'react';


export default class LikeButton extends Component {

  render() {
    return (<button onClick={ this.props.increment }>
      { this.props.numberOfLikes === 0 ? "no" : this.props.numberOfLikes }
      &nbsp;likes
    </button>)
  }
  
}

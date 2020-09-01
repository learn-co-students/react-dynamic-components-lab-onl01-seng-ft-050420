import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacity = this.props.opacity
    const lowOpacity = this.props.opacity - (0.1)
    if (opacity >= 0.2){
        return (<div className="color-box" style={{opacity: opacity}}>
          <ColorBox opacity={lowOpacity}/>
          </div>)
    } else {
      return null
    }
  }
}
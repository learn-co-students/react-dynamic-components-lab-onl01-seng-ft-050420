import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this.props.opacity)
    let newOpacity = this.props.opacity - 0.1
      if (this.props.opacity <= 0.2) {
        return null
      } else {
        console.log(this.props.opacity)
        return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            <ColorBox opacity={newOpacity} />
          </div>
        )
      }
  }

}
import React, { Component } from "react";
import "../card.css";
class Counter extends Component {
  render() {
    return (
      <div className="counter-container" style={{display:this.props.display}}>
      <div className="progress-text-title">{this.props.counterTitle}</div>
      <div className="progress-text">
          {this.props.counterValue}
      </div>
      </div>
    );
  }
}
export default Counter;

import React, { Component } from "react";
import "../card.css";
class Counter extends Component {
  render() {
    return (
      <div className="progress">
        <div className="progress-value" style={{
            width:this.props.progress
        }}>

        </div>
        <div className="progress-text">
            {this.props.counterValue} {this.props.counterTitle}
        </div>
      </div>
    );
  }
}
export default Counter;

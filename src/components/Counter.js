import React, { Component } from "react";
import "../card.css";
class Counter extends Component {
  render() {
    return (
      <div>
      <div className="progress-text-title">{this.props.counterTitle}</div>
      <div className="progress">
        <div className="progress-text">
          {parseInt(this.props.counterValue).toLocaleString()} 
        </div>
        <div className="progress-value" style={{
            width:this.props.progress
        }}>

        </div>
      </div>
      </div>
    );
  }
}
export default Counter;

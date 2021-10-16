import React, { Component } from "react";
import "../card.css";
class Counter extends Component {
  render() {
    return (
      <div style={{display:this.props.display}}>
      <div className="progress-text-title">{this.props.counterTitle}</div>
      <div className="progress">
        <div className="progress-text">
          {this.props.counterValue} 
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

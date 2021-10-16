import React, { Component } from "react";
import "../card.css";
//import Counter from "../components/Counter";
class CardButton extends Component {
    shoot=()=>{
        alert(this.props.stateName);
    }
  render() {
    return (<div className="card" onClick={this.shoot}>
        {this.props.stateName}
    </div>);
  }
}

export default CardButton;

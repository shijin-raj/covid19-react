import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SideBar(props) {
  const [stateList, setStateList] = useState(props.states);

  useEffect(() => {
    if (props.states) {
      setStateList(props.states);
    }
  }, [props.states]);

  const showStateList = () => {
    let states = [];
    if (stateList.length > 1) {
      stateList.forEach((element) => {
        states.push(
          <StateNameListItem data={element} key={element.state_code} active={false} onselect={props.onselect}></StateNameListItem>
        );
      });
    }
    return states;
  };

  return <div className="side-bar">{showStateList()}</div>;
}

function StateNameListItem(props) {
    const [active, setActive] = useState(props.active);
const toggleActive=()=>{
    setActive(!active);
    props.onselect(props.data);
}

  return (
      <div className={active?"state-name-item active":"state-name-item"} onClick={toggleActive}>
      {props.data.state_name}
      <span className="icon-container">
      <FontAwesomeIcon icon="chevron-right" />
</span>
      </div>
  );
}

import React, { useState, useEffect } from "react";
import "./SideBar.css";
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
          <StateNameListItem name={element.state_name} code={element.state_code} key={element.state_code} active={false} onselect={props.onselect}></StateNameListItem>
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
    props.onselect(props.code);
}

  return (
      <div className={active?"state-name-item active":"state-name-item"} onClick={toggleActive}>
      {props.name}
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
</span>
      </div>
  );
}

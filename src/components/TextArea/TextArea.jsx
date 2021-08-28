import React from "react";

function TextArea(props) {
  return (
    <div>
      <label>{props.children}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChangeValue}
      />
    </div>
  );
}

export default TextArea;

import React from "react";
import style from "./Input.module.css";

function Input(props) {
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

export default Input;

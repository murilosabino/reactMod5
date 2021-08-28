import React from "react";
import style from "./Botao.module.css";

function Botao(props) {
  return (
    <button type="button" className={style.botao} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Botao;

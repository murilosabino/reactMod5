import React from "react";
import style from "./Botao.module.css";

function Botao() {
  return (
    <button type="button" className={style.botao} onClick={this.props.onClick}>
      {this.props.children}
    </button>
  );
}

export default Botao;

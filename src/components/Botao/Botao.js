import React, { Component } from "react";
import style from './Botao.module.css';

class Botao extends React.Component{
    render(){
        return(
            <button
            type="button" 
            className={style.botao}
            onClick={this.props.onClick}
            >{this.props.children}</button>
        )
    }
}

export default Botao;
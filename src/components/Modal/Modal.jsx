import React from 'react';
import axios from "axios";
import Input from "../Input/Input";
import style from './Modal.module.css'
import Botao from '../Botao/Botao'



const Modal = (props)=>{
    return(
        <div className={style.Modal}>
            <div className={style.Content}>
                <div className={style.Auntentication}>
                    <h1>Aréa Autenticação</h1>
                </div>
                <div className={style.Update}>
                    <h1>Aréa do input</h1>
                    <p>{props.nome}</p>
                    <p>{props.comentarios}</p>
                    <Input />
                </div>
                <Botao onClick={props.funcao}>Fechar</Botao>
            </div>
        </div>
    );

}

export default Modal;
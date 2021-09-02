import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../Input/Input";
import style from "./Modal.module.css";
import Botao from "../Botao/Botao";
import TextArea from "../TextArea/TextArea";

const Modal = (props) => {
  const [desabilitar, setDesabilitar] = useState(true);

  const [telefone, setTelefone] = useState({});

  const [valueInput, setValueInput] = useState({
    NOME: "",
    TELEFONE: "",
    COMENTARIOS: "",
    NOTA: 0,
  });

  const handleChangeInput = (e) => {
    valueInput[e.target.name] = e.target.value;
    setValueInput(valueInput);
  };
  const handleTel = (e) => {
    const telefoneInput = e.target.value;
    console.log(telefoneInput)
    setTelefone(telefoneInput);
  };
  const fechModal = () => {
    setDesabilitar(true);
  };
  const autenticacao = () => {
    if (telefone == props.telefone) {
      console.log(telefone)
      console.log(props.tel)
      setDesabilitar(false);
    }
    else
    {
      alert('número de Telefone Incorreto')
      setDesabilitar(true)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://shrouded-atoll-54679.herokuapp.com/assessments/update/${props.id}`,
        valueInput
      )
      .then((response) => {
        alert("Comentário atualizado!");
      });
  };
  return (
    <div className={style.Modal}>
      <div className={style.Content}>
        <div className={style.Auntentication}>
          <h1>Autenticação</h1>
          <div className={style.input} >
           <Input name={"Tel"} onChangeValue={handleTel} />
          </div >
          <br></br>
          <Botao onClick={autenticacao}>Entrar</Botao>
        </div>
        <div className={style.Update}>
          <fieldset disabled={desabilitar}>
            <form onSubmit={handleFormSubmit}>
              <div className={style.input}>
                <Input
                  // value={value.nome}
                  type={"text"}
                  name={"NOME"}
                  onChangeValue={handleChangeInput}
                >
                  Nome:
                </Input>
                <Input onChangeValue={handleChangeInput} name={"TELEFONE"}>
                  Telefone:
                </Input>
                <TextArea onChangeValue={handleChangeInput} name={"COMENTARIOS"}>
                  Comentario:
                </TextArea>
                <Input onChangeValue={handleChangeInput} name={"NOTA"}>
                  Nota:
                </Input>
                <br></br>
              </div>
              <Botao onClick={handleFormSubmit}>Clique</Botao>
            </form>
          </fieldset>
        </div>
        
        <div className={style.Auntentication}>
          <Botao
            onClick={() => {
              fechModal();
              props.funcao();
            }}
          >
            Fechar
          </Botao>
        </div>
      </div>
    </div>
  );
};

export default Modal;

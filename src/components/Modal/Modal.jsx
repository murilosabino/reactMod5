import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../Input/Input";
import style from "./Modal.module.css";
import Botao from "../Botao/Botao";
import TextArea from "../TextArea/TextArea";

const Modal = (props) => {
  const [desabilitar, setDesabilitar] = useState(true);

  const [telefone, setTelefone] = useState({ Tel: "" });

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
    const telefone = e.target.tel;
    setTelefone(telefone);
  };
  const fechModal = () => {
    setDesabilitar(true);
  };
  const autenticacao = (props) => {
    if (telefone === props.telefone) {
      setDesabilitar(false);
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
          <h1>Aréa Autenticação</h1>
          <Input name={"Tel"} onChangeValue={handleTel} />
          <Botao onClick={autenticacao}></Botao>
        </div>
        <div className={style.Update}>
          <h1>Aréa do input</h1>
          <fieldset disabled={desabilitar}>
            <form onSubmit={handleFormSubmit}>
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
              <Botao onClick={handleFormSubmit}>Clique</Botao>
            </form>
          </fieldset>
        </div>
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
  );
};

export default Modal;

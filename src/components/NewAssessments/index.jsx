import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Botao from "../Botao/Botao";
import style from "./newAssessment.module.css";

const NewAssessments = () => {
  const [valueInput, setValueInput] = useState({
    NOME: "",
    TELEFONE: "",
    COMENTARIOS: "",
    NOTA: 0,
  });

  const [desabilitar, setDesabilitar] = useState(false);

  const handleChangeInput = (e) => {
    valueInput[e.target.name] = e.target.value;
    setValueInput(valueInput);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://shrouded-atoll-54679.herokuapp.com/assessments/new",
        valueInput
      )
      .then((response) => {
        console.log(response.data.result);
        alert(response.data.result.length + " cadastros!");
        setDesabilitar(true);
      });
  };

  const deleteFormSubmit = (e) => {
    const valorInput = valueInput.NOME;
    e.preventDefault();
    axios
      .delete(
        `https://shrouded-atoll-54679.herokuapp.com/assessments/delete/${valorInput}`
      )
      .then((response) => {
        alert({ valorInput });
        console.log(valorInput);
        setDesabilitar(false);
      });
  };

  console.log(valueInput);

  return (
    <div>
      <fieldset disabled={desabilitar}>
        <div className={style.main}>
          <form className={style.formulario} onSubmit={handleFormSubmit}>
            <Input
              className={style.input}
              // value={value.nome}
              type={"text"}
              name={"NOME"}
              onChangeValue={handleChangeInput}
            >
              Nome:
            </Input>
            <Input
              className={style.input}
              onChangeValue={handleChangeInput}
              name={"TELEFONE"}
            >
              Telefone:
            </Input>
            <TextArea
              className={style.texto}
              onChangeValue={handleChangeInput}
              name={"COMENTARIOS"}
            >
              Comentário:
            </TextArea>
            <Input
              className={style.input}
              onChangeValue={handleChangeInput}
              name={"NOTA"}
            >
              Nota:
            </Input>
          </form>
        </div>
      </fieldset>
      <div className={style.btn}>
        <Botao  onClick={handleFormSubmit}>Enviar</Botao>
        <Botao onClick={deleteFormSubmit}>Desfazer</Botao>
      </div>
    </div>
  );
};

export default NewAssessments;

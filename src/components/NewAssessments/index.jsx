import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Botao from "../Botao/Botao";
import style from "./newAssessment.module.css"

const NewAssessments = () => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://shrouded-atoll-54679.herokuapp.com/assessments/new",
        valueInput
      )
      .then((response) => {
        alert(response.data.result.length + " cadastros!");
      });
  };

  console.log(valueInput);

  return (
    <div className={style.main}>
      <form className={style.formulario} onSubmit={handleFormSubmit}>
        <Input className = {style.input}
          // value={value.nome}
          type={"text"}
          name={"NOME"}
          onChangeValue={handleChangeInput}
        >
          Nome:
        </Input>
        <Input className={style.input} onChangeValue={handleChangeInput} name={"TELEFONE"}>
          Telefone:
        </Input>
        <TextArea className={style.texto} onChangeValue={handleChangeInput} name={"COMENTARIOS"}>
          Comentario:
        </TextArea>
        <Input className={style.input} onChangeValue={handleChangeInput} name={"NOTA"}>
          Nota:
        </Input>
        <Botao className={style.botao} onClick={handleFormSubmit}>Clique</Botao>
      </form>
    </div>
  );
};

export default NewAssessments;

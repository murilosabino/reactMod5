import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Botao from "../Botao/Botao";

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
    <div>
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
    </div>
  );
};

export default NewAssessments;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../components/Input/Input";
import TextArea from "../components/TextArea/TextArea";
import Botao from "../components/Botao/Botao";

function DeleteAssessments() {
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
      .delete(
        `https://shrouded-atoll-54679.herokuapp.com/assessments/delete/${"hhhhhhhh"}`,
        valueInput
      )
      .then((response) => {
        alert("Comentário deletado!");
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Estou no delete</h1>
        <Input type={"text"} name={"NOME"} onChangeValue={handleChangeInput}>
          Entre com id:
        </Input>
        <Botao onClick={handleFormSubmit}>Clique</Botao>
      </form>
    </div>
  );
}
export default DeleteAssessments;

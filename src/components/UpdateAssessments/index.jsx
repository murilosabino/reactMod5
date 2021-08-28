import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import Botao from "../Botao/Botao";
import TextArea from "../TextArea/TextArea";
import axios from "axios";
const UpdateAssessments = () => {
  //   const [dados, setDados] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("https://shrouded-atoll-54679.herokuapp.com/assessments")
  //       .then((resposta) => setDados(resposta.data.result));
  //   }, []);
  //   console.log(dados);

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
      .put(
        `https://shrouded-atoll-54679.herokuapp.com/assessments/update/${6}`,
        valueInput
      )
      .then((response) => {
        alert("Comentário atualizado!");
      });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Estou no update</h1>
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

export default UpdateAssessments;

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

  const [desabilitar, setDesabilitar] = useState(false)



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
        setDesabilitar(true);
      })
      
  };

  const deleteFormSubmit = (e) => {
    const valorInput = valueInput.NOME;
    e.preventDefault();
    axios
      .delete(
        `https://shrouded-atoll-54679.herokuapp.com/assessments/delete/${valorInput}`
      )
      .then((response) => {
        alert({valorInput});
        console.log(valorInput)
        setDesabilitar(false)
      });
  };

  console.log(valueInput);

  return (
    <div>
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
            <Input onChangeValue={handleChangeInput} name={"TELEFONE"} disabled={true}>
              Telefone:
            </Input>
            <TextArea onChangeValue={handleChangeInput} name={"COMENTARIOS"}>
              Comentario:
            </TextArea>
            <Input onChangeValue={handleChangeInput} name={"NOTA"}>
              Nota:
            </Input>
        </form>
      </fieldset>
            <Botao onClick={handleFormSubmit}>Enviar</Botao>
            <Botao onClick={deleteFormSubmit}>Desfazer</Botao>

    </div>
  );
};

export default NewAssessments;

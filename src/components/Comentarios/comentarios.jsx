import React, { useState, useEffect } from "react";
import Botao from '../Botao/Botao'
import style from '../Comentarios/Comentarios.module.css'

const Comentarios = () => {
  const [dadosApi, setDadosApi] = useState([]);
  const [valueInput, setValueInput] = useState([]);
  const [displayComentarios, setDisplay] = useState("none")


const onChange = (e) => {
  const valor = e.target.value
  setValueInput(valor)
}

const mudaDisplay = () => {
    if(displayComentarios == "none")
    {
      console.log('Mudando display pra flex')
      setDisplay('flex')
      console.log(displayComentarios)
    }
    else
    {
      console.log('Mudando display pra none')
      setDisplay("none")
      console.log(displayComentarios)
    }
}

  useEffect(() => {
    fetch("https://shrouded-atoll-54679.herokuapp.com/assessments")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setDadosApi(dados.result);
      });
  }, []);
  
  return (
      <div>
        <Botao onClick={mudaDisplay}>Mostrar Comentários</Botao>
        <div style={{display:displayComentarios}}>
          <div>
              {!!dadosApi ? (
                dadosApi.map((item) => {
                  return(
                    <div>
                    {item.NOME.includes(valueInput) ? (
                      <div className={style.Valores}>
                        <p>{item.NOME}</p>
                        <p>{item.COMENTARIOS}</p>
                      </div>
                    ): (
                      <p></p>
                    ) }
                    
                    </div>
                  )                
                })
              ): (<p>Carregando</p>)}
            </div>
            </div>
        </div>          
  )};

export default Comentarios;

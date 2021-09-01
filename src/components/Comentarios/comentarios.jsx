import React, { useState, useEffect } from "react";
import Botao from '../Botao/Botao'
import style from '../Comentarios/Comentarios.module.css'
import Modal from '../Modal/Modal'

const Comentarios = () => {
  const [dadosApi, setDadosApi] = useState([]);
  const [valueInput, setValueInput] = useState([]);
  const [displayComentarios, setDisplay] = useState("none");
  const [displayModal, setDisplayModal] = useState("none");
  const [itemTelefone, setItemTelefone] = useState('none')

const onChange = (e) => {
  const valor = e.target.value
  setValueInput(valor)
}

const MostraModal = ()=> {
  if(displayModal == "none")
  {
    console.log(displayModal)
    setDisplayModal('flex')
  }
  else{
    setDisplayModal('none')
  }
}

const clickEdit = (item)=>{
  setItemTelefone(item.TELEFONE);
  console.log(itemTelefone)
  MostraModal();
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
                        <img src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png" className={style.ImagemEditar}  onClick={()=> clickEdit(item)}/>
                      </div>        
                    ): (
                      <p></p>
                    ) }
                    
                    </div>
                  )                
                })
              ): (<p>Carregando</p>)}
            </div>
                <div style={{display:displayModal}}>
                  <Modal funcao={MostraModal}/>
                </div>
            </div>
        </div>          
  )};

export default Comentarios;

import React, { useState, useEffect } from "react";
import styles from "./Lanches.module.css";
const Lanches = () => {
  const [dadosApi, setDadosApi] = useState([]);
  const [valueInput, setValueInput] = useState([]);


const onChange = (e) => {
  const valor = e.target.value
  setValueInput(valor)
}

  useEffect(() => {
    fetch("https://shrouded-atoll-54679.herokuapp.com/cardapio")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setDadosApi(dados.result);
      });
  }, []);

  console.log(valueInput)
  console.log(dadosApi)
  
  return (
        <div className={styles.lanche}>
          <label className={styles.nome} htmlFor="lanche">lanche</label>
          <input className={styles.nomedolanche} type="text" name="lanche" onChange={onChange}/>
            {!!dadosApi ? (
              dadosApi.map((item) => {
                return(
                  <div>
                  {item.NOME.includes(valueInput) ? (
                    <div>
                      <p>{item.NOME}</p>
                      <img className={styles.imagem} src={item.FOTO} alt="#" />
                    </div>
                  ): (
                    <p></p>
                  ) }
                  
                  </div>
                )
                
              })
            ): (<p>Carregando</p>)}
          </div>

  )};

export default Lanches;

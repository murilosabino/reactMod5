import React, { useState, useEffect } from "react";
import styles from "./Lanches.module.css";
const Lanches = () => {
  const [dadosApi, setDadosApi] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-atoll-54679.herokuapp.com/cardapio")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setDadosApi(dados.result);
      });
  }, []);
  return <div>{console.log(dadosApi)}</div>;
};

export default Lanches;

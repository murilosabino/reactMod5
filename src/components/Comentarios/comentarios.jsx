import React, { useState, useEffect } from "react";
import Botao from "../Botao/Botao";
import style from "../Comentarios/Comentarios.module.css";
import Modal from "../Modal/Modal";

const Comentarios = (props) => {
  const [dadosApi, setDadosApi] = useState([]);
  const [valueInput, setValueInput] = useState([]);
  const [displayComentarios, setDisplay] = useState("none");
  const [displayModal, setDisplayModal] = useState("none");
  const [itemTelefone, setItemTelefone] = useState("");
  const [itemId, setitemId] = useState("");

  const onChange = (e) => {
    const valor = e.target.value;
    setValueInput(valor);
  };

  const MostraModal = () => {
    if (displayModal == "none") {
      setDisplayModal("flex");
    } else {
      setDisplayModal("none");
    }
  };

  const clickEdit = (item) => {
    setItemTelefone(item.TELEFONE);
    setitemId(item.ID);
    console.log(itemTelefone);
    MostraModal();
  };

  const mudaDisplay = () => {
    if (displayComentarios == "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
  };

  useEffect(() => {
    fetch("https://shrouded-atoll-54679.herokuapp.com/assessments")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setDadosApi(dados.result);
      });
  }, []);

  return (
    <div className={style.comentario}>
      <Botao onClick={mudaDisplay}>Mostrar Comentários</Botao>
      <div style={{ display: displayComentarios }}>
        <div>
          {!!dadosApi ? (
            dadosApi.map((item) => {
              return (
                <div>
                  {item.NOME.includes(valueInput) ? (
                    <div className={style.Valores}>
                      <p>{item.NOME}</p>
                      <p>{item.COMENTARIOS}</p>
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png"
                        className={style.ImagemEditar}
                        onClick={() => clickEdit(item)}
                      />
                    </div>
                  ) : (
                    <p></p>
                  )}
                </div>
              );
            })
          ) : (
            <p>Carregando</p>
          )}
        </div>
        <div style={{ display: displayModal }}>
          <Modal funcao={MostraModal} id={itemId} telefone={itemTelefone} />
        </div>
      </div>
    </div>
  );
};

export default Comentarios;

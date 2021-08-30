import React from "react";
import { Switch, Route } from "react-router-dom";
import NewAssessments from "../../components/NewAssessments";
import Input from "../../components/Input/Input";
import styles from "./Avaliacoes.module.css";
import UpdateAssessments from "../../components/UpdateAssessments";
import DeleteAssessments from "../../DeleteAssessments";
import Comentarios from "../../components/Comentarios/comentarios"

const Avaliacoes = () => {
  return (
    <div>
      <div className={styles.CardInput}>
      <NewAssessments />
      <UpdateAssessments />
      <DeleteAssessments />
      </div>   
      <Comentarios />
    </div>
  );
};

export default Avaliacoes;

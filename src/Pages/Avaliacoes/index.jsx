import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NewAssessments from "../../components/NewAssessments";
import Input from "../../components/Input/Input";
import styles from "./Avaliacoes.module.css";
import UpdateAssessments from "../../components/UpdateAssessments";
import DeleteAssessments from "../../components/DeleteAssessments";
import Botao from "../../components/Botao/Botao";

const Avaliacoes = (props) => {
  return (
    <div className={styles.main}>
      <section className={styles.btn}>
        <li className={styles.btnn}>
          <Link to="new">
            <Botao>Nova Avaliação</Botao>
          </Link>
        </li>
        <li className={styles.btnp}>
          <Link to="edit">
            <Botao>Todas as avaliações</Botao>
          </Link>
        </li>
      </section>

      <section>
        <Switch>
          <Route path="/Avaliacoes/new" component={NewAssessments} />
          <Route path="/Avaliacoes/edit" component={UpdateAssessments} />
        </Switch>
      </section>

      {/* <UpdateAssessments />
      <DeleteAssessments /> */}
    </div>
  );
};

export default Avaliacoes;

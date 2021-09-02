import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NewAssessments from "../../components/NewAssessments";
import Input from "../../components/Input/Input";
import styles from "./Avaliacoes.module.css";
// import UpdateAssessments from "../../components/UpdateAssessments";
// import DeleteAssessments from "../../DeleteAssessments";
import Botao from "../../components/Botao/Botao";
import Comentarios from "../../components/Comentarios/comentarios";

const Avaliacoes = (props) => {
  return (
    <main className={styles.new}>
      <h1>Seja um cliente no 10, nos avalie e tenha direito a benefícios.</h1>

      <section>
        <Link to="nova">
          <Botao>Nos avalie</Botao>
        </Link>
        <Link to="edit">
          <Botao>Confira as avaliações</Botao>
        </Link>
      </section>

      <Switch>
        <Route path="/avaliacoes/nova" component={NewAssessments} />
        <Route path="/avaliacoes/edit" component={Comentarios} />
      </Switch>
      {/* <NewAssessments /> */}
      {/* <UpdateAssessments />
      <DeleteAssessments /> */}
    </main>
  );
};

export default Avaliacoes;

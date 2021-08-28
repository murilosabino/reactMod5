import React from "react";
import { Switch, Route } from "react-router-dom";
import NewAssessments from "../../components/NewAssessments";
import Input from "../../components/Input/Input";
import styles from "./Avaliacoes.module.css";
import UpdateAssessments from "../../components/UpdateAssessments";
import DeleteAssessments from "../../DeleteAssessments";

const Avaliacoes = () => {
  return (
    <div>
      <NewAssessments />
      <UpdateAssessments />
      <DeleteAssessments />
    </div>
  );
};

export default Avaliacoes;

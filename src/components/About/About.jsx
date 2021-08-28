import React, { Component } from "react";
import style from "./About.module.css";
import ifood from "../../img/ifood.png";
import uber from "../../img/uber.png";
import vegetariano from "../../img/veg.jpg";
import tradicional from "../../img/tradicional.jpg";

class About extends React.Component {
  render() {
    return (
      <section className={style.principal}>
        <h1 className={style.titulosection}>Nossos queridinhos mais pedidos</h1>

        <div className={style.divVeg}>
          <img
            className={style.veg}
            src={vegetariano}
            width="100"
            height="50"
          />
          <h3 className={style.tituVeg}>Vegetariano</h3>
          <h4 className={style.descrVeg}></h4>
        </div>

        <div className={style.divTrad}>
          <img
            className={style.trad}
            src={tradicional}
            width="100"
            height="50"
          />
          <h3 className={style.tituTrad}>Tradicional</h3>
          <h4 className={style.descrTrad}></h4>
        </div>

        <h2 className={style.app}>Peça pelo aplicativo</h2>

        <img className={style.uber} src={uber} width="100" height="50" />

        <img className={style.ifood} src={ifood} width="100" height="50" />
      </section>
    );
  }
}

export default About;

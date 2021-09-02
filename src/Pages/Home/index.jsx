import React from "react";
import style from "./Home.module.css";
import About from "../../components/About/About";
function Home() {
  return (
    <section className={style.main}>
      <div className={style.vazia}>
        <p className={style.texto}>Do tamanho da sua fome!</p>
      </div>

       
      <p className={style.relativo}></p>
      <About/>
    </section>
  );
}

export default Home;

import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <section className={style.main}>
      <img
        className={style.imagem}
        src="https://www.picturesof.pics/images/quotes/english/general/black-burger-with-chiken-and-52650-310280.jpg"
      ></img>
      
      <p className={style.relativo}></p>
      
    </section>
  );
}

export default Home;

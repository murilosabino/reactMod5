import React from "react";
import style from "./Header.module.css";
function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navH}>
        <a href="/Menu">Cardápio</a>
        <a href="/Contato">Contato</a>
        <a className={style.larica} href="/">
          Larica
        </a>
        <a href="/Sobre">Sobre</a>
        <a href="/Avaliacoes">Avaliações</a>
      </nav>
    </header>
  );
}

export default Header;

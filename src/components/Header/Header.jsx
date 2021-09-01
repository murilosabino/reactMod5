import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navH}>
        <Link to="/menu">Cardápio</Link>
        <Link to="/time">Nosso Time</Link>
        <Link className={style.larica} to="/">
          Larica
        </Link>
        <Link to="/sobre">sobre</Link>
        <Link to="/avaliacoes/nova">Avaliações</Link>

        {/* <a href="/Menu">Cardápio</a>
        <a href="/Contato">Contato</a>
        <a className={style.larica} href="/">
          Larica
        </a>
        <a href="/Sobre">Sobre</a>
        <a href="/Avaliacoes">Avaliações</a> */}
      </nav>
    </header>
  );
}

export default Header;

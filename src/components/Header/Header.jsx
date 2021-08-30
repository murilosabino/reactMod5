import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navH}>
        <Link to="/Menu">Cardápio</Link>
        <Link to="/Contato">Contato</Link>
        <Link to="/" className={style.larica}>
          Larica
        </Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Avaliacoes/edit">Avaliações</Link>

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

import React, { Component } from "react";
import style from './Header.module.css';

class Header extends React.Component{
    render(){
        return(
            <header className={style.header}>
                <nav className={style.navH}>
                    <a>Lanches</a>
                    <a>Fale conosco</a>
                    <a className={style.larica}>Larica</a>
                    <a>Avaliações</a>
                    <a>Trabalhe conosco</a>
                </nav>
            </header>
        )
    }
}

export default Header;
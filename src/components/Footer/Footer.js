import React, { Component } from "react";
import style from './Footer.module.css';

class Footer extends React.Component{
    render(){
        return(
            <footer className={style.footer}>
                <h3 className={style.textFooter}> Larica 2021 - Todos os direitos reservados</h3>
            </footer>
        )
    }
}

export default Footer;
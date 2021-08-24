import React, { Component } from "react";
import style from './Main.module.css';

class Main extends React.Component{
    render(){
        return(
            <section className={style.main}>
                <img className={style.imagem} src="https://www.picturesof.pics/images/quotes/english/general/black-burger-with-chiken-and-52650-310280.jpg"></img>
                <p className={style.relativo}>Testeeeeeeee</p>
            </section>
        )
    }
}

export default Main;
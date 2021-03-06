import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sobre from "./Pages/Sobre/index";
import Contato from "./Pages/Contatos/index";
import Menu from "./Pages/Menu/index";
import Home from "./Pages/Home";
import style from "./App.module.css"
import Footer from "./components/Footer/Footer";
import Avaliacoes from "./Pages/Avaliacoes/index";

function App() {
  return (
    <section className={style.teste}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Sobre" component={Sobre} />
          <Route path="/Contato" component={Contato} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Avaliacoes*" component={Avaliacoes} />
        </Switch>
       
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;

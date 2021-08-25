import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Botao from "./components/Botao/Botao";

import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contatos";
import Menu from "./Pages/Menu";
import Home from "./Pages/Home";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Sobre" component={Sobre} />
          <Route path="/Contato" component={Contato} />
          <Route path="/Menu" component={Menu} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;

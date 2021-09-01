import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sobre from "./Pages/Sobre/index";
import Time from "./Pages/Time/index";
import Menu from "./Pages/Menu/index";
import Home from "./Pages/Home";

import Footer from "./components/Footer/Footer";
import Avaliacoes from "./Pages/Avaliacoes/index";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/time" component={Time} />
          <Route path="/menu" component={Menu} />
          <Route path="/avaliacoes/*" component={Avaliacoes} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Menu } from "./Componentes/Menu/Index";
import { Rodape } from "./Componentes/Rodape/Index";

import Home from "./Pages/Home/Index";
import Enfermagem from "./Pages/PageCursoEnfermagem/Index";
import DesenvolvimentoSist from "./Pages/PageDesenvolvimentoSistema/Index";
import AcucarAlcool from "./Pages/PageAcucarAlcool/Index";
import RescursosHumanos from "./Pages/PageRecursosHumanos/Index"
import Administracao from "./Pages/PageAdministracao/Index";
import Agropecuaria from "./Pages/PageAgropecuaria/Index";
import Zootecnia from "./Pages/PageZootecnia/Index";
import Agronegocio from "./Pages/PageAgronegocio/Index";




function App() {
  return (
    <Router>
      <div className="App">
        <Menu />

        <Switch>

          <Route path="/enfermagem">
            <Enfermagem />
          </Route>

          <Route path="/desenvolvimentodesistema">
            <DesenvolvimentoSist />
          </Route>

          <Route path="/acucarealcool">
            <AcucarAlcool />
          </Route>

          <Route path="/rescursoshumanos">
            <RescursosHumanos />
          </Route>

          <Route path="/administracao">
            <Administracao />
          </Route>

          <Route path="/agropecuaria">
            <Agropecuaria />
          </Route>

          <Route path="/zootecnia">
            <Zootecnia />
          </Route>

          <Route path="/agronegocio">
            <Agronegocio />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="*">
            <div>404 not found</div>
          </Route>

        </Switch>

        <Rodape />
      </div>
    </Router>
  );
}

export default App;

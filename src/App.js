import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Menu } from "./Componentes/Menu/Index";
import { Rodape } from "./Componentes/Rodape/Index";

import Home from "./Pages/Home/Index";
import Efermagem from "./Pages/PageCursoEnfermagem/Index";




function App() {
  return (
    <Router>
      <div className="App">
        <Menu />

        <Switch>

          <Route path="/enfermagem">
            <Efermagem />
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

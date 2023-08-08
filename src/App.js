import './App.css';
import { Menu } from "./Componentes/Menu/Index.js";
import { DescricaoCPS } from "./Componentes/DescricaoCPS/Index";
import { CursosTecnicos } from "./Componentes/CursosTecnicos/Index";
import { EstagiosEmpregos } from "./Componentes/EstagiosEmpregos/Index";

function App() {
  return (
    <div className="App">
      <Menu />
      <DescricaoCPS />
      <CursosTecnicos />
      <EstagiosEmpregos />
    </div>
  );
}

export default App;

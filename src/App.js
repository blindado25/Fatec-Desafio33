import './App.css';
import { Menu } from "./Componentes/Menu/Index.js";
import { DescricaoCPS } from "./Componentes/DescricaoCPS/Index";
import { CursosTecnicos } from "./Componentes/CursosTecnicos/Index";

function App() {
  return (
    <div className="App">
      <Menu />
      <DescricaoCPS />
      <CursosTecnicos />
    </div>
  );
}

export default App;

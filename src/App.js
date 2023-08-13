import './App.css';
import { Menu } from "./Componentes/Menu/Index.js";
import { DescricaoCPS } from "./Componentes/DescricaoCPS/Index";
import { CursosTecnicos } from "./Componentes/CursosTecnicos/Index";
import { EstagiosEmpregos } from "./Componentes/EstagiosEmpregos/Index";
import { Noticias } from "./Componentes/Noticias/Index";
import { Rodape } from "./Componentes/Rodape/Index";

function App() {
  return (
    <div className="App">
      <Menu />
      <DescricaoCPS />
      <CursosTecnicos />
      <EstagiosEmpregos />
      <Noticias />
      <Rodape />

    </div>
  );
}

export default App;

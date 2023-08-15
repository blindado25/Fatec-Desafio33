import './Style.css';
import { DescricaoCPS } from "../../Componentes/DescricaoCPS/Index";
import { CursosTecnicos } from "../../Componentes/CursosTecnicos/Index";
import { EstagiosEmpregos } from "../../Componentes/EstagiosEmpregos/Index";
import { Noticias } from "../../Componentes/Noticias/Index";

function Index() {
  return (
    <div className="Index">
      <DescricaoCPS />
      <CursosTecnicos />
      <EstagiosEmpregos />
      <Noticias />
    </div>
  );
}

export default Index;

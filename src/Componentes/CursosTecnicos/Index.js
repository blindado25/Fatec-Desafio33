import { Link } from 'react-router-dom';
import '../CursosTecnicos/Style.css';
import '../reset.css';
import Curso1 from '../CursosTecnicos/img/vacina.png';
import Curso2 from '../CursosTecnicos/img/computador.png';
import Curso3 from '../CursosTecnicos/img/processo.png';
import Curso4 from '../CursosTecnicos/img/despesas.png';
import Curso5 from '../CursosTecnicos/img/cana-de-acucar.png';
import Curso6 from '../CursosTecnicos/img/agricultura.png';
import Curso7 from '../CursosTecnicos/img/vaca.png';
import Curso8 from '../CursosTecnicos/img/agricultura.png';



export function CursosTecnicos() {
    return (
        <div className='alinhamento-cursos'>
            <h1>Cursos técnicos</h1>

            <div className='grid-cursos'>
                <div className='curso'><Link to="/enfermagem"  >
                    <img src={Curso1} alt="ENFERMAGEM" />
                    <p>ENFERMAGEM</p>
                </Link></div>

                <div className='curso'><Link to="/desenvolvimentodesistema" >
                    <img src={Curso2} alt="DESENVOLVIMENTO DE SISTEMAS" />
                    <p>DESENVOLVIMENTO DE SISTEMAS</p>
                </Link></div>

                <div className='curso'><Link to="/rescursoshumanos" >
                    <img src={Curso3} alt="RESURSOS HUMANOS" />
                    <p>RESURSOS HUMANOS</p>
                </Link></div>

                <div className='curso'><Link to="/administracao" >
                    <img src={Curso4} alt="ADMINITRAÇÃO" />
                    <p>ADMINITRAÇÃO</p>
                </Link></div>

                <div className='curso'><Link to="/acucarealcool" >
                    <img src={Curso5} alt="AÇÚCAR E ÁLCOOL" />
                    <p>AÇÚCAR E ÁLCOOL</p>
                </Link></div>

                <div className='curso'><Link to="/agropecuaria" >
                    <img src={Curso6} alt="AGROPECUÁRIA" />
                    <p>AGROPECUÁRIA</p>
                </Link></div>

                <div className='curso'><Link to="/zootecnia" >
                    <img src={Curso7} alt="ZOOTECNIA" />
                    <p>ZOOTECNIA</p>
                </Link></div>

                <div className='curso'><Link to="/agronegocio" >
                    <img src={Curso8} alt="AGRONEGÓCIO" />
                    <p>AGRONEGÓCIO</p>
                </Link></div>

            </div>
        </div>

    );
}
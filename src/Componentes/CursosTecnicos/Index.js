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
                <div className='curso'><a href="/" target='_blank' >
                    <img src={Curso1} alt="ENFERMAGEM" />
                    <p>ENFERMAGEM</p>
                </a></div>

                <div className='curso'><a href="/" target='_blank' >
                    <img src={Curso2} alt="DESENVOLVIMENTO DE SISTEMAS" />
                    <p>DESENVOLVIMENTO DE SISTEMAS</p>
                </a></div>

                <div className='curso'><a href="/" target='_blank' >
                    <img src={Curso3} alt="RESURSOS HUMANOS" />
                    <p>RESURSOS HUMANOS</p>
                </a></div>

                <div className='curso'><a href="/" target='_blank' >
                    <img src={Curso4} alt="ADMINITRAÇÃO" />
                    <p>ADMINITRAÇÃO</p>
                </a></div>

                <div className='curso'><a href="/" target='_blank' >
                    <img src={Curso5} alt="AÇÚCAR E ÁLCOOL" />
                    <p>AÇÚCAR E ÁLCOOL</p>
                </a></div>

                <div className='curso'><a href="/" target='_blank' >
                    <img src={Curso6} alt="AGROPECUÁRIA" />
                    <p>AGROPECUÁRIA</p>
                </a></div>

                <div className='curso'><a href="/" target='_blank' >
                    <img src={Curso7} alt="ZOOTECNIA" />
                    <p>ZOOTECNIA</p>
                </a></div>

                <div className='curso'><a href="/" target='_blank' >
                    <img src={Curso8} alt="AGRONEGÓCIO" />
                    <p>AGRONEGÓCIO</p>
                </a></div>

            </div>
        </div>

    );
}
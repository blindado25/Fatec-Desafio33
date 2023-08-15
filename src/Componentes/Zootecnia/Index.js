import '../Zootecnia/Style.css';
import '../reset.css';
import ZootecniaIMG from './zootecnia.png';
import Sol from "../Icones/Sun.svg";
import User from "../Icones/User.svg";
import Ampulheta from "../Icones/HourglassMedium.svg";
import BotaoVoltar from "../Botao/Index";


export function Zootecnia() {
    return (
        <div className='alinha-curso-enfermage'>

            <div className='topo-curso-enfermagem'>
                <h1>ZOOTECNIA</h1>
            </div>

            <div class="alinha-dados-curso-enfermagem">
                <div class="foto-curso-Enfermagem">
                    <img src={ZootecniaIMG} alt="Curso de Zootecnia" />
                </div>

                <div class="dados-curso-enfermagem">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae vestibulum iaculis lacus aliquam convallis dolor risus. Velit vitae in lectus facilisis arcu tempor. Tempus dolor convallis accumsan nulla mi amet. Vulputate risus neque tellus faucibus molestie sem mauris. Semper quis orci scelerisque lectus. Leo sollicitudin cursus diam maecenas posuere at malesuada maecenas. Facilisis nunc nunc pellentesque libero arcu et leo dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio molestie nec, vulputate tellus tellus.</p>

                    <div class="sobre-curso">
                        <img src={Sol} alt="Periodo:" />
                        <div class="curso-dados">
                            <h4>Período</h4>
                            <h3>Noturno</h3>
                        </div>
                    </div>

                    <div class="sobre-curso">
                        <img src={User} alt="User:" />
                        <div class="curso-dados">
                            <h4>Coordenação</h4>
                            <h3>Iuri Silva</h3>
                        </div>
                    </div>

                    <div class="sobre-curso">
                        <img src={Ampulheta} alt="Ampulheta:" />
                        <div class="curso-dados">
                            <h4>Duração</h4>
                            <h3>2 anos</h3>
                        </div>
                    </div>

                </div>
            </div>
            <div className='enfermagem-objetivos-fundo'>
                <div class="enfermagem-objetivos">
                    <h1>Objetivos gerais</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae vestibulum iaculis lacus aliquam convallis dolor risus. Velit vitae in lectus facilisis arcu tempor. Tempus dolor convallis accumsan nulla mi amet. Vulputate risus neque tellus faucibus molestie sem mauris. Semper quis orci scelerisque lectus. Leo sollicitudin cursus diam maecenas posuere at malesuada maecenas. Facilisis nunc nunc pellentesque libero arcu et leo dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio molestie nec, vulputate tellus tellus.</p>
                </div>
            </div>

            <div class="enfermagem-objetivos enfermagem-objetivos-espaco">
                <h1>Objetivos específicos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae vestibulum iaculis lacus aliquam convallis dolor risus. Velit vitae in lectus facilisis arcu tempor. Tempus dolor convallis accumsan nulla mi amet. Vulputate risus neque tellus faucibus molestie sem mauris. Semper quis orci scelerisque lectus. Leo sollicitudin cursus diam maecenas posuere at malesuada maecenas. Facilisis nunc nunc pellentesque libero arcu et leo dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio molestie nec, vulputate tellus tellus.</p>
            </div>
            <BotaoVoltar />

        </div>
    );
}
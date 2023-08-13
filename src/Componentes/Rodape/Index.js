import '../Rodape/Style.css';
import '../reset.css';
import Logorodape from "../Logo/logoRodape.png";
import Global from "../Icones/GlobeHemisphereWest.svg";
import Phone from "../Icones/Phone.svg";
import Envelope from "../Icones/EnvelopeSimple.svg";
import Insta from "../Icones/InstagramLogo.svg";
import Facebook from "../Icones/FacebookLogo.svg";
import Linkedin from "../Icones/LinkedinLogo.svg";



export function Rodape() {
    return (
        <div className='rodape-alinhamento'>
            <div className='rodape-contem'>
                <div class="rodape-logo">
                    <a href="https://www.cps.sp.gov.br/" target='_blank'>
                        <img src={Logorodape} />
                    </a>
                </div>

                <div class="rodape-contato-alinha">
                    <div class="rodape-alinha">
                        <div className='rodape-logo-redondo'>
                            <img src={Global} alt="Global" />
                        </div>
                        <div className='rodape-contato'>
                            <p>Rua Codelândia, 1367</p>
                            <h3>Cafelândia, SP</h3>
                        </div>
                    </div>

                    <div class="rodape-alinha">
                        <div className='rodape-logo-redondo'>
                            <img src={Phone} alt="Global" />
                        </div>
                        <div className='rodape-contato'>
                            <h2>+55 14 9999-9999</h2>
                        </div>
                    </div>

                    <div class="rodape-alinha">
                        <div className='rodape-logo-redondo'>
                            <img src={Envelope} alt="Global" />
                        </div>
                        <div className='rodape-contato'>
                            <h2>centropaulasouza@etec.sp.gov.br</h2>
                        </div>
                    </div>
                </div>

                <div class="rodape-etec">
                    <h1>Sobre a Etec Cafelândia</h1>
                    <p>Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy Moreira Martins Aguiar se destaca no ensino médio e técnico, recebendo constantemente menções e congratulações em todo o estado de São Paulo. </p>
                    <div class="rodape-rede-social">
                        <div className='rodape-logo-redondo'>
                            <img src={Insta} alt="Global" />
                        </div>
                        <div className='rodape-logo-redondo'>
                            <img src={Facebook} alt="Global" />
                        </div>
                        <div className='rodape-logo-redondo'>
                            <img src={Linkedin} alt="Global" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="rodape-direitos-reservados">
                <h1>Etec Professora Helcy Moreira Martins Aguiar - 2022 © Todos os direitos reservados.</h1>
            </div>

        </div>

    );
}
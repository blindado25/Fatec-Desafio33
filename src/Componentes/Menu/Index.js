import '../Menu/Style.css';
import '../reset.css';
import Logo from "../Logo/logo.png";
import Insta from "../Icones/InstagramLogo.svg";
import Face from "../Icones/FacebookLogo.svg";
import Linkedin from "../Icones/LinkedinLogo.svg";


export function Menu() {
    return (

        <div className='alinhamento'>
            <a href="https://www.cps.sp.gov.br/" target='_blank'>
                <img src={Logo} />
            </a>
            <div className="topo">
                <h1> <a href="/" > Inicio</a></h1>
                <h1> <a href="/" target='_blank'>Curso</a></h1>
                <h1> <a href="/" target='_blank'>Vagas</a></h1>
                <h1> <a href="/" target='_blank'>Noticias</a></h1>
                <h1> <a href="/" target='_blank'>Contato</a></h1>
            </div>
            <div className="topo-midia">

                <a href="https://www.instagram.com/" target='_blank'>
                    <img src={Insta} />
                </a>
                <a href="https://www.facebook.com/" target='_blank'>
                    <img src={Face} />
                </a>
                <a href="https://br.linkedin.com/" target='_blank'>
                    <img src={Linkedin} />
                </a>

            </div>

        </div>

    );
}
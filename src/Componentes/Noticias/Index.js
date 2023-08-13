import '../Noticias/Style.css';
import '../reset.css';



export function Noticias() {
    return (
        <div>
            <div className='noticias-titulo'>
                <h1>Notícias</h1>
            </div>
            <div class="noticia-contem">

                <div class="noticia">
                    <a href="/" target='_blank'>
                        <div class="imagem-noticia"></div>
                        <div className='noticia-conteudo'>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                            <p>Postado em 00/00/00</p>
                        </div>
                    </a>
                </div>

                <div class="noticia">
                    <a href="/" target='_blank'>
                        <div class="imagem-noticia"></div>
                        <div className='noticia-conteudo'>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                            <p>Postado em 00/00/00</p>
                        </div>
                    </a>
                </div>

                <div class="noticia">
                    <a href="/" target='_blank'>
                        <div class="imagem-noticia"></div>
                        <div className='noticia-conteudo'>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                            <p>Postado em 00/00/00</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='botao-alinhamento'>
                <a href="/" target='_blank'>
                    <div class="botao-noticia">
                        <h1>Ver mais notícias</h1>
                    </div>
                </a>
            </div>
        </div>


    );
}
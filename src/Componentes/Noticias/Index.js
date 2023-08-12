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
                    <div class="imagem-noticia"></div>
                    <div className='noticia-conteudo'>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p>Postado em 00/00/00</p>
                    </div>
                </div>

                <div class="noticia">
                    <div class="imagem-noticia"></div>
                    <div className='noticia-conteudo'>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p>Postado em 00/00/00</p>
                    </div>
                </div>

                <div class="noticia">
                    <div class="imagem-noticia"></div>
                    <div className='noticia-conteudo'>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p>Postado em 00/00/00</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="botao-noticia">
                    <h1>Ver mais notícias</h1>
                </div>
            </div>
        </div>


    );
}
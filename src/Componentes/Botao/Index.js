import React from 'react';
import { useHistory } from 'react-router-dom';
import './Style.css'; // Certifique-se de criar um arquivo de estilo CSS

function BotaoVoltar() {
    const history = useHistory();

    const handleVoltar = () => {
        history.goBack();
    };

    return (
        <button className="botao-voltar" onClick={handleVoltar}>
            Voltar
        </button>
    );
}

export default BotaoVoltar;
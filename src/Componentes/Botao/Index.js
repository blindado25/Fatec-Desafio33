import React from 'react';
import { useHistory } from 'react-router-dom';
import './Style.css';

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
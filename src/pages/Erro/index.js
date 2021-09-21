import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './erro.css';

class Erro extends Component {
    render(){
        return(
            <div>
                <h1><em>Página não encontrada!</em></h1>
                <Link to="/" className="toHome">Clique aqui e veja todos os filmes!</Link>
            </div>
        );
    }
}

export default Erro;
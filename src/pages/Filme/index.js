import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import './filme-info.css';

export default function Filme() {
    const {id} = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                //tentou acessar com um ID que não existe, direciono para home.
                history.replace('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();
    },[history, id]);

    function salvaFilme(){
        //salvar e buscar lista de filmes no localStorage
        const minhaLista = localStorage.getItem('filmes');

        //a lista virá como string, passar para JSON ou um array vazio.
        let filmesSalvos = JSON.parse(minhaLista) || [];

        //Ignorar caso o filme já esteja salvo
        const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.error('Você já salvou este filme!');
            return;
            //Para a execução do código
        }

        filmesSalvos.push(filme);
        //passar para string para salvar no localStorage
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!');

    }

    if(loading){
        return(
            <h1>Carregando seu filme...</h1>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
             <h3>Sinopse</h3>
            <p>{filme.sinopse}</p>
            <div className="botoes">
                <button onClick={salvaFilme}>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    );    
}
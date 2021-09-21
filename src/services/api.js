import axios from 'axios'; 

//sujeitoprogramador.com/r-api/?api=filmes/

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;
import axios from 'axios';

const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});
export default {
    getAllPokemon(){
        return http.get(`/pokemon/`, {params: {limit: 809}});
    },
    getPokemon(name){
        return http.get(`/pokemon/${name}`);
    }
}
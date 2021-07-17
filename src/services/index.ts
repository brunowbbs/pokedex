import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

type Pokemon = {
  name: string;
  url: string;
}

async function fechPokemons(page: number, finishLoading: () => void) {

  //Listando pokemons
  const { data } = await api.get(`?offset=${page}&limit=20`);
  const pokemons: Array<Pokemon> = data.results;

  if (page > data.count) {
    finishLoading();
    return;
  }


  //Recuperando detalhes de todos os pokemons listados
  const promisesFetch = pokemons.map(async function (pokemon) {
    return await api.get(`/${pokemon.name}`);
  })
  return Promise.all(promisesFetch);
}



export { api, fechPokemons };
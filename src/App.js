import React from 'react';
import useSWR from 'swr';
import PokemonList from './components/PokemonList';

const url = 'https://pokeapi.co/api/v2/pokemon'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function App() {
    const { data: result, error } = useSWR(url, fetcher);
    
    if (error) return <div>failed to load</div>
    if (!result) return <div>loading...</div>
    console.log(result);
    return (
      
      <div className="pokemons">
          {result.results.map((pokemon) => (
              <PokemonList key={pokemon.name} pokemon={pokemon} />
              
          ))}
          
      </div>
    )
    
}
export default App

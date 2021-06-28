import React, { useState } from 'react';
import useSWR from 'swr';
import './App.css';
import Pokemon from './components/Pokemon';


function App() {
  
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=8&offset=0`;

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data: result, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>
  if (!result) return <div>loading...</div>

  return (
    <div>
      <div className="pokemons">

        {result.results.sort((a, b) => a.name < b.name ? -1 :1).map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />

        ))}

      </div>
      
    </div>
  )

}
export default App

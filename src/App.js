import React, { useState } from 'react';
import useSWR from 'swr';
import './App.css';
import Pokemon from './components/Pokemon';


function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageIndex}`;
  console.log(pageIndex);

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data: result, error } = useSWR(url, fetcher);
  console.log(url)
  
  if (error) return <div>failed to load</div>
  if (!result) return <div>loading...</div>
  console.log(result);
  return (
    <div>
      <div className="pokemons">
        {result.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />

        ))}

      </div>
      <div className='pagination'>
        <button onClick={() => setPageIndex(pageIndex - 20)}>Previous</button>
        <button onClick={() => setPageIndex(pageIndex + 20)}>Next</button>
      </div>  
    </div>
  )

}
export default App

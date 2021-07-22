import { useState } from 'react';
import useSWR from 'swr';
import PokemonCard from './PokemonCard';

const PokemonList = () => {

    const [index, setIndex] = useState(0);
    
    const url = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=${index}`;

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: result, error } = useSWR(url, fetcher);

    if (error) return <div>failed to load</div>
    if (!result) return <div>loading...</div>

    return (
        <div className="pokemon-list">
            <div className="pokemons">
                {result.results.sort((a, b) => a.name < b.name ? -1 : 1).map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => setIndex(index - 9)}>Previous</button>
                <button onClick={() => setIndex(index + 9)}>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;

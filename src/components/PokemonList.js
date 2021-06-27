import React from 'react';
import Pokemon from './Pokemon';

function PokemonList({ pokemon }) {
    console.log(pokemon);
    return (
        <div className='pokemon-card'>
            <Pokemon pokemon={pokemon} />
        </div>
    ) 
    
}

export default PokemonList;
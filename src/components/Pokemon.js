import React from 'react';
import useSWR from 'swr'

function Pokemon({ pokemon }) {

    const { name } = pokemon;
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const { data, error } = useSWR(url);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            <h1 className='pokemon-card__name'>{name}</h1>
            <img
                className='pokemon-card__image'
                src={data.sprites.front_default}
                alt={name}
            />
        </div>
    )
}

export default Pokemon;
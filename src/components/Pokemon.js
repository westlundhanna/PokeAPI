import React from 'react';
import useSWR from 'swr';
import './Pokemon.css';


function Pokemon({ pokemon }) {

    const { name } = pokemon;
    
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const { data, error } = useSWR(url);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data.types[0].type.name);
    return (
        <div className='pokemon-card'>
            <div className='pokemon-card__content'>
                <h1 className='pokemon-card__name'>{name}</h1>
                <img
                    className='pokemon-card__image'
                    src={data.sprites.front_default}
                    alt={name}
                />
                <p>{data.abilities[0].ability.name}</p>
                <p>{data.types[0].type.name}</p>
            </div>
        </div>
    )
}

export default Pokemon;
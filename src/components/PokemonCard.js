import React from "react";
import { Link } from "react-router-dom";
import useSWR from 'swr';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {

    const { name } = pokemon;

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const { data, error } = useSWR(url);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <Link to={{
            pathname: `/${data.name}`,
            pokemonProps: data
        }}>
        <div className='pokemon-card'>
            <div className='pokemon-card__content'>
                <p>{data.id}</p>
                <h1 className='pokemon-card__name'>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                <img
                    className='pokemon-card__image'
                    src={data.sprites.front_default}
                    alt={name}
                />
                <p>{data.abilities[0].ability.name}</p>
                <p>{data.types[0].type.name}</p>
            </div>
        </div>
        </Link>

    )
}

export default PokemonCard;
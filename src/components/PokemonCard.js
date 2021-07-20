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
                <img
                    className='pokemon-card__image'
                    src={data.sprites.front_default}
                    alt={name}
                />
                <div className='pokemon-card__info'>
                    <p className='pokemon-card__name'>Name: {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                    <p>Abilities: {data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1)}</p>
                    <p>Category: {data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1)}</p>
                </div>
            </div>
        </div>
        </Link>

    )
}

export default PokemonCard;
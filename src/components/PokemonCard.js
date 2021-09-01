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
            <div className='pokemon-card'>
                <div className='pokemon-card__content'>
                    <img
                        className='pokemon-card__image'
                        src={data.sprites.front_default}
                        alt={name}
                    />
                    <div className='pokemon-card__info'>  
                    <p className='pokemon-card__name'>Name: {name}</p>
                    <p className='pokemon-card__abilities'>Abilities: {data.abilities[0].ability.name}</p>
                    <p className='pokemon-card__categories'>Category: {data.types[0].type.name}</p>
                    </div>
                </div>
                <Link className='pokemon-card__link' to={{
                    pathname: `/${name}`,
                    pokemonProps: data,
                    state: pokemon
                    }}>
                    View Details
                </Link>
            </div>
    )
}

export default PokemonCard;
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import './PokemonCard.css';

const PokemonCard = ({ data }) => {

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        getPokemon(data);
    }, [data]);

    const getPokemon = async (data) => {
        const uri = `https://pokeapi.co/api/v2/pokemon/${data.name}/`;
        try {
            const response = await axios.get(uri);
            setPokemon(response.data);
        } catch (error) {   
            console.log(error);
        }
    };

    return (
        <>
        {pokemon && (
            <div className='pokemon-card'>
                <div className='pokemon-card__content'>
                    <img
                        className='pokemon-card__image'
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                    <div className='pokemon-card__info'>  
                    <p className='pokemon-card__name'>Name: {data.name}</p>
                    <p className='pokemon-card__abilities'>Abilities: {pokemon.abilities[0].ability.name}</p>
                    <p className='pokemon-card__categories'>Category: {pokemon.types[0].type.name}</p> 
                    </div>
                </div>
                <Link className='pokemon-card__link' to={{
                    pathname: `/${data.name}`,
                    state: pokemon
                    }}>
                    View Details
                </Link>
                
            </div>
            )}
            </>
    )
}

export default PokemonCard;
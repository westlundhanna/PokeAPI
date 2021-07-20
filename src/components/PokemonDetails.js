import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import useSWR from "swr";
import './PokemonDetails.css';

const PokemonDetails = (props) => {

    const history = useHistory();

    const name = props.location.pokemonProps.name;

    const url = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: result, error } = useSWR(url, fetcher);
  
    if (error) return <div>failed to load</div>
    if (!result) return <div>loading...</div>

    const description = result.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z.é ]/g, " ");

    function clickHandler() {
        history.push("/");
    }

    return (
        <div className="pokemon-details">
            <div className="pokemon-details__content">
                <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                <div className="pokemon-details__images">
                    <img
                        className='pokemon-card__image'
                        src={props.location.pokemonProps.sprites.front_default}
                        alt={props.location.pokemonProps.name}
                    />
                    <img
                        className='pokemon-card__image'
                        src={props.location.pokemonProps.sprites.back_default}
                        alt={props.location.pokemonProps.name}
                    />
                </div>
                <p>{description}</p>
            </div>
            <button className="go-back" onClick={clickHandler}>Go back</button>
        </div>
    )



}

export default PokemonDetails;
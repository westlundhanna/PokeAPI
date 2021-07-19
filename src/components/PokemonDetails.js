import { useHistory, useLocation } from "react-router-dom";
import React from "react";

const PokemonDetails = (props) => {
    
    let history = useHistory();

    function clickHandler() {
        history.push("/");
    }

    console.log(props.location.pokemonProps)
    console.log(props.location.pokemonProps.name)

    return (
        <div className="pokemon-details">
            <h1>{props.location.pokemonProps.name}</h1>
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
            <button onClick={clickHandler}>Go back</button>
        </div>
    )



}

export default PokemonDetails;
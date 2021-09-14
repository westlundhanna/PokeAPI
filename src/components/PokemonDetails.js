import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './PokemonDetails.css';

const PokemonDetails = (props) => {
    const [details, setDetails] = useState();

    useEffect(() => {
        getDetails();
    }, [])
    
    const getDetails = async () => {
        const uri = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
        try {
            const response = await axios.get(uri);
            setDetails(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        } 
        
        
    };
   
    console.log(props)

    const history = useHistory();

    const { name, id, sprites } = props.history.location.state;

    console.log(props.history.location.state);

    console.log(details)

    function clickHandler() {
        history.push("/");
    }

    return (
        <div className="pokemon-details__wrapper">
            <div className="pokemon-details__content">
            <h1 className='pokemon-details__name'>{id}. {name}</h1>
            <div className="pokemon-details__images">
                <img
                    className='pokemon-card__image'
                    src={sprites.front_default}
                    alt={name + " front"}
                />
                <img
                    className='pokemon-card__image'
                    src={sprites.back_default}
                    alt={name + " back"}
                />
            </div>
            {details && (
                <ul className="pokemon-details__list">
                    <li><h4>Egg group</h4>
                        <p>{details.egg_groups[0].name}</p>
                    </li>
                    <li><h4>Color</h4>
                        <p>{details.color.name}</p>
                    </li>
                    <li><h4>Description</h4>
                        <p className="description">{details.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z.é´' ]/g, " ")}</p>
                    </li>
                </ul>
            )}
            </div>
            
            
            <button className="go-back" onClick={clickHandler}>Go back</button>
        </div>
    )
}

export default PokemonDetails;
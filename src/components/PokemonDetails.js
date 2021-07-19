import { useParams, useHistory } from "react-router-dom";

const PokemonDetails = () => {
    const params = useParams();

    let history = useHistory();

    function clickHandler() {
        history.push("/");
    }

    return (
        <>
            
            <p>{params.pokemonName}</p>
            <button onClick={clickHandler}>Go back</button>
        </>
    )



}

export default PokemonDetails;
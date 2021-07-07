import { useParams } from "react-router-dom";

const PokemonDetails = () => {
    const params = useParams();

    
    console.log(params)

        return (
            <div>
            <p>{params.pokemonName}</p>
            </div>
        )
    

        
    

}

export default PokemonDetails;
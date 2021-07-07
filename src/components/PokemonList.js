import { Link } from "react-router-dom";
import PokemonCard from './PokemonCard';
import useSWR from 'swr';

const PokemonList = ({pokemon}) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=8`;

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: result, error } = useSWR(url, fetcher);
  
    if (error) return <div>failed to load</div>
    if (!result) return <div>loading...</div>
    
    return (
    <div>
      <div className="pokemons">
          {result.results.sort((a, b) => a.name < b.name ? -1 :1).map((pokemon) => (
            <Link to={`/${pokemon.name}`}>  
              <PokemonCard key={pokemon.name} pokemon={pokemon} /> 
            </Link>
          ))}

      </div>
      
    </div>
    )
}

export default PokemonList;
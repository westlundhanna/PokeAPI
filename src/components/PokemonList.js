import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import PokemonFilter from './PokemonFilter';
import './PokemonList.css';

const PokemonList = () => {
    const [index, setIndex] = useState(0);
    const [filter, setFilter] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        getData();
    }, [index]);

    useEffect(() => {
        getDataByTypes(filter);
    }, [filter]);

    const getData = async () => {
        const uri = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=${index}`;
        try {
            const response = await axios.get(uri);
            setData(response.data.results);
            console.log(response)
        } catch (error) {
            setError(error);
            console.log(error);
        } 
    };

    // result.results.sort((a, b) => a.name < b.name ? -1 : 1);

    const getDataByTypes = async (filter) => {
        const uri = `https://pokeapi.co/api/v2/type/${filter}`;
        
        if (filter) {
          try {
            const response = await axios.get(uri);
            setData(response.data.results);
          } catch (error) {
            console.log(error);
          } 
        }
    };

    if (!Array.isArray(data)) {
        return <p>There was an error loading your data!</p>;
    }

    console.log(
        data && data.map((pokemon) => (
            <PokemonCard key={pokemon.name} data={pokemon} />
        ))
    )

    return (
        <section>
            <PokemonFilter setFilter={setFilter} filter={filter} />
            <div className="pokemon-list">
                <div className="pokemons">
                    {data.map((pokemon) => (
                        <PokemonCard key={pokemon.name} data={pokemon} />
                    ))}
             
                </div>
                <div className="pagination">
                    <button 
                        onClick={() => setIndex(index - 9)} 
                        disabled={data.previous === null}
                    >
                    Previous
                    </button>
                    <button 
                        onClick={() => setIndex(index + 9)}
                        disabled={data.next === null}
                    >
                    Next
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PokemonList;

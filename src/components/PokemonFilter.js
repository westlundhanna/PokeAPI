import './PokemonFilter.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const PokemonFilter = ({setFilter, filter}) => {

    const [types, setTypes] = useState([]);

    useEffect(() => {
        getType();
    }, []);

    function filteredTypeHandler(e) {
        console.log(e.target.value);
        setFilter(e.target.value)
    }

    const getType = async () => {
        const uri = 'https://pokeapi.co/api/v2/type';

        try {
            const response = await axios.get(uri);
            setTypes(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };
    
    return(
        <div className="pokemon-types__sidebar">
            <h2>Filter Pokémon by type</h2>
            <select 
                name="pokemon-type" 
                className="pokemon-types__filter"
                onChange={filteredTypeHandler}
                value={filter}
                >
                <option value="All">Filter By Type</option>
                {types.map((type) => {
                return (
                    <option key={type.name} value={type.name}> {type.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default PokemonFilter;
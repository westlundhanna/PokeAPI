import { useHistory } from "react-router-dom";
import useSWR from "swr";
import './PokemonDetails.css';

const PokemonDetails = (props) => {

    const history = useHistory();

    const { name, sprites } = props.history.location.state;

    const url = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: result, error } = useSWR(url, fetcher);
  
    if (error) return <div>failed to load</div>
    if (!result) return <div>loading...</div>

    const description = result.flavor_text_entries[0].flavor_text.replace(/[^a-zA-Z.é´' ]/g, " ");
    const eggGroup = result.egg_groups[0].name;
    const color = result.color.name;

    function clickHandler() {
        history.push("/");
    }

    return (
        <div className="pokemon-details__wrapper">
            <div className="pokemon-details__content">
                <h1 className='pokemon-details__name'>{result.id}. {name}</h1>
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
                <ul className="pokemon-details__list">
                    <li><h4>Egg group</h4>
                        <p>{eggGroup}</p>
                    </li>
                    <li><h4>Color</h4>
                        <p>{color}</p>
                    </li>
                    <li><h4>Description</h4>
                        <p className="description">{description}</p>
                    </li>
                </ul>
            </div>
            <button className="go-back" onClick={clickHandler}>Go back</button>
        </div>
    )
}

export default PokemonDetails;
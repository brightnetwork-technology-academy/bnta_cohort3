import { useState, useEffect } from "react";
import PokemonDetails from "../components/PokemonDetails";
import PokemonButton from "../components/PokemonButton";

const PokemonContainer = () => {

    const [currentPokemon, setCurrentPokemon] = useState(1);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
            .then(response => response.json())
            .then(data => setPokemon(data));
    }, [currentPokemon]);

    const incrementPokemonCounter = () => {
        setCurrentPokemon(currentPokemon + 1);
    }

    const decrementPokemonCounter = () => {
        if (currentPokemon > 1){
            setCurrentPokemon(currentPokemon - 1);
        }
    }

    return(
        pokemon ?
        <div>
            <h1>Pokemon</h1>
            <PokemonDetails pokemon={pokemon}/>
            <PokemonButton onClick={decrementPokemonCounter} text={"Previous"}/>
            <PokemonButton onClick={incrementPokemonCounter} text={"Next"}/>
        </div>
        :
        <p>loading pokemon...</p>
    )

}

export default PokemonContainer;
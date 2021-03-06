import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Pokemon() {

    const { dexNumber } = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        setPokemon();
        fetch(`https://pokeapi.co/api/v2/pokemon/${dexNumber}/`)
            .then(response => response.json())
            .then(result => setPokemon(result));
    }, [dexNumber]);

    if (pokemon) {

        const sprites = Object.keys(pokemon.sprites)
            .filter(key => key !== "other" && key !== "versions" && pokemon.sprites[key])
            .map(key => [key, pokemon.sprites[key]]);

        return (
            <>
                <h3>{pokemon.name}</h3>
                <div className="row">
                    {sprites.map(sprite => (
                        <div className="col-4" key={sprite[0]}>
                            <figure>
                                <img src={sprite[1]}
                                    alt={sprite[0]} />
                                <figcaption>{sprite[0]}</figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
            </>
        )
    }

    return <div className="alert alert-warning">Waiting...</div>
}

export default Pokemon;


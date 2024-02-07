import React from 'react';
import Cards from '../Cards/Cards';
import { useSelector } from 'react-redux';

const CardsContainer = () => {
    const loading = useSelector((state) => state.pokemon.loading);
    const pokemons = useSelector((state) => state.pokemon.allPokemons);
    const error = useSelector((state) => state.pokemon.error);

    return (
        <div className="flex flex-wrap justify-center">
            {pokemons.length ? (
                pokemons.map(({ id, name, image, types }) => (
                    <div key={id} className="w-1/5 p-2">
                        <Cards id={id} name={name} image={image} types={types} />
                    </div>
                ))
            ) : (
                <div>
                    {loading && !error ? (
                        <h1>Loading...</h1>
                    ) : error ? (
                        <h1>There was an error</h1>
                    ) : (
                        <h1>There are no items to show</h1>
                    )}
                </div>
            )}
        </div>
    );
};

export default CardsContainer;

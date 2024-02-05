import  { useState, useEffect } from "react";
import { allPokemons } from "../../../Services/Pokemons/AllPokemons";


const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPokemon = await allPokemons(1);
        setPokemons(allPokemon.pokemons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // La dependencia vacía asegura que se llama solo una vez al montar el componente

  return (
    <div>
      <h1>Home</h1>
      {pokemons.map((pokemon) => (
        <h3 key={pokemon.id}>
          {pokemon.name}
        </h3>
      ))}
    </div>
  );
};

export default Home;

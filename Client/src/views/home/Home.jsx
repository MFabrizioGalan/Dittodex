import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allPokemons } from "../../../Services/Pokemons/allPokemons";
import CardsContainer from "./CardsContainer/CardsContainer";
import NavBar from "../landing/NavBar/NavBar"
const Home = () => { 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allPokemons(1))
  }, []);
  
  return (

    <div>
      <NavBar />
      <CardsContainer />
    </div>
  );
};

export default Home;

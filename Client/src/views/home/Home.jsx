import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPokemons } from "../../../Services/Pokemons/allPokemons";
import CardsContainer from "./CardsContainer/CardsContainer";
import NavBar from "../landing/NavBar/NavBar"
import PaginationContainer from "./Pagination/Pagination";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allPokemons(currentPage));
  }, [currentPage, dispatch]);

  const handlePageChange = (event, page) => {
    
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 10);
  };

  return (
    <div>
      <NavBar />
      <SearchBar />
      <CardsContainer currentPage={currentPage} />
      <PaginationContainer onPageChange={handlePageChange} />
    </div>
  );
};

export default Home;

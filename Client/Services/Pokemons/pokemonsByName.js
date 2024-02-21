import axios from "axios";
import { setLoading, setSearch, setError, setErrorSearch } from '../../src/redux/features/pokemonSlice'

export const pokemonsByName =  (namePokemon) => (dispatch) => {
    dispatch(setLoading(true))
    axios
        .get('http://localhost:3001/pokemon?name=' + namePokemon)
        .then((response) => {
            dispatch(setSearch(response.data))
        })
        .catch((error) =>{
            dispatch(setErrorSearch(error.message))
        })
}

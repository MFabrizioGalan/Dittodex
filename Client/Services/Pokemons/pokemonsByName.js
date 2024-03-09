import axios from "axios";
import { setLoading, setSearch, setError, setErrorSearch } from '../../src/redux/features/pokemonSlice'

export const pokemonsByName =  (namePokemon, page) => (dispatch) => {
    dispatch(setLoading(true))
    axios
        .get('http://localhost:3001/pokemon?name=' + namePokemon + '&page=' + page)
        .then((response) => {
            console.log('response', response.data)
            dispatch(setSearch(response.data))
        })
        .catch((error) =>{
            dispatch(setErrorSearch(error.message))
        })
}

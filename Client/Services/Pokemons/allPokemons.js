import axios from 'axios'
import { setLoading, setPokemons, setError } from '../../src/redux/features/pokemonSlice'

export const allPokemons = (page) => (dispatch) => {
    dispatch(setLoading(true))
    axios
        .get('http://localhost:3001/pokemon?page=' + page)
        .then((response) => {
            dispatch(setPokemons(response.data.pokemons))
        })
        .catch((error) =>{
            dispatch(setError(error.message))
        })
}

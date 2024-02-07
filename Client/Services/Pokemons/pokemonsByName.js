import axios from "axios";

export const pokemonsByName = async (namePokemon) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get('http://localhost:3001/pokemon?name=' + namePokemon);
            dispatch(pokemonsByNameSuccess(data));
        } catch (error) {
            dispatch(pokemonsByNameFailure(error.response.data));
        }

    }
}

const pokemonsByNameSuccess = (data) => ({
    type: "POKEMONS_BY_NAME_SUCCESS",
    payload: data
});

const pokemonsByNameFailure = (error) => ({
    type: "POKEMONS_BY_NAME_FAILURE",
    payload: error
});
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    allPokemons: [],
    pokemonDetails: [],
    search: [],
    error: "",
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setPokemons: (state, action) => {
            state.loading = false;
            state.allPokemons = action.payload;
            state.error = "";
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const { setLoading,setPokemons, setError } = pokemonSlice.actions;

export default pokemonSlice.reducer;

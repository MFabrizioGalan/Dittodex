import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    allPokemons: [],
    copyPokemons: [],
    pokemonDetails: [],
    search: [],
    error: "",
    currentPage: "",
    allPage: "",
    copyPage: "",
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
            state.allPokemons = action.payload.pokemons;
            state.copyPokemons = state.allPokemons;
            state.error = "";
            state.currentPage = action.payload.currentPage;
            state.allPage = action.payload.allPage;
            state.copyPage = action.payload.allPage;

        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setSearch: (state, action) => {
            state.loading = false;
            state.allPokemons = action.payload.pokemons;
            state.search = action.payload.pokemons;
            state.currentPage = state.currentPage;
            state.allPage = action.payload.allPage;
            state.error = "";
        },
        resetSearch: (state) => {
			state.allPokemons = state.copyPokemons;
			state.search = [];
            state.allPage = state.copyPage;
		},
        setErrorSearch: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.allPokemons = [];
            state.search = [];
        },
    },
});

export const { setLoading,setPokemons, setError, setSearch, resetSearch, setErrorSearch } = pokemonSlice.actions;

export default pokemonSlice.reducer;

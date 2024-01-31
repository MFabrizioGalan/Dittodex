import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = `http://localhost:3001/pokemon`;

const initialState = {
	loading: false,
	allPokemons: [],
	pokemonDetails: [],
	search: [],
	error: "",
};

export const fetchPokemons = createAsyncThunk(
    "pokemons/fetchPokemons",
    async(_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(URL);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const searchPokemons = createAsyncThunk(
    "pokemons/searchPokemons",
    async(namePokemon, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${URL}?name=${namePokemon}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchPokemonDetail = createAsyncThunk(
	"pokemons/fetchPokemonDetail",
	async (pokemonId, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(`${URL}/${pokemonId}`);
			return data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Todos los Pokemons
        builder.addCase(fetchPokemons.pending, ( state )=>{
            state.loading = true;
        });
        builder.addCase(fetchPokemons.fulfilled, ( state, action )=>{
            state.loading = false;
            state.allPokemons = action.payload;
            state.pokemonDetails = [];
            state.error = "";
        });
        builder.addCase(fetchPokemons.rejected, ( state, action )=>{
            state.loading = false;
            state.error = (action.payload && action.payload.error) || action.error.message;
        });

        //Buscar Pokemón por Nombre
        builder.addCase(searchPokemons.pending, ( state )=>{
            state.loading = true;
        });
        builder.addCase(searchPokemons.fulfilled, ( state, action )=>{
            state.loading = false;
            state.allPokemons = action.payload;
            state.search = action.payload;
            state.error = "";
        });
        builder.addCase(searchPokemons.rejected, ( state, action )=>{
            state.loading = false;
            state.error = (action.payload && action.payload.error) || action.error.message;
        });


        //Buscar Pokemón por ID
        builder.addCase(fetchPokemonDetail.pending, ( state )=>{
            state.loading = true;
        });
        builder.addCase(fetchPokemonDetail.fulfilled, ( state, action )=>{
            state.loading = false;
            state.pokemonDetails = action.payload;
            state.error = "";
        });
        builder.addCase(fetchPokemonDetail.rejected, ( state, action )=>{
            state.loading = false;
            state.error = (action.payload && action.payload.error) || action.error.message;
        });
    }
});


export default pokemonSlice.reducer;
import axios from 'axios';

export const allPokemons = async (page) => {
    const response = await axios.get('http://localhost:3001/pokemon?page=' + page);

    const result = response.data;
    return result;
    
}


const axios = require('axios');

const getApiTypes = async () => {
    try {
        // console.log("soy yo")
        const responses = await axios.get(`https://pokeapi.co/api/v2/type`);

        // console.log(responses.data.results)
        return responses.data.results;
    } catch (error) {
        console.error("Error al obtener datos de la API:", error.message);
        throw error;
    }
}

module.exports = {
    getApiTypes
};

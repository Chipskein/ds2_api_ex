const axios=require('axios');
const LogServices = require('../utils/LogService');
module.exports={
    getAllMovies:async ()=>{
        try{
            const urlBusca =`https://swapi.dev/api/films/`;
            const { data } = await axios.get(urlBusca);
            return data;
        } catch(error){
            LogServices.error(error.message);
            return { result:[] };
        }
    },
    getAllCharacterInfo: async (id)=>{
        try{
            const urlBusca =`https://swapi.dev/api/people/${id}`;
            const { data } = await axios.get(urlBusca);
            return data;
        } catch(error){
            LogServices.error(error.message);
            return null;
        }
    },
    getMovie:async (id)=>{
        try{
            const urlBusca =`https://swapi.dev/api/films/${id}`;
            const { data } = await axios.get(urlBusca);
            return data;
        } catch(error){
            LogServices.error(error.message);
            return null;
        }
    },
}
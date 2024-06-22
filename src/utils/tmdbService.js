import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3";
//Taken from TMBD
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjY4NmYwZTlmYTU4YjMxMDllNTU4M2ZmMTk5ZGM1YyIsInN1YiI6IjY2NTdkZjc3NTJjYzAzYTgzNGUyMTBjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oh8iBXNWlzjhxDHVbHblqvYSHAJbcAjydsyVG9Br_jI";

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

const fetchDataFrmApi = async(url,params)=>{
   try{
    const {data} = await axios.get(BASE_URL+url,{
      params,
      headers
    });
    return data;
   }catch(error){
    console.error(error);
    return error
   }
}

export default fetchDataFrmApi;
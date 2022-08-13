import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "8a485d4552452fe87e04e972d00c1e64",
    language: "es-ES",
  }
});

export default movieDB;
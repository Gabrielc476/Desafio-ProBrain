import axios from "axios"

const instancia = axios.create({
    baseURL: "https://api.pokemontcg.io/v2"
})


instancia.defaults.headers['Authorization'] = process.env.REACT_APP_API_KEY


export default instancia
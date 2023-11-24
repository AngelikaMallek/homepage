import axios from 'axios'

const URL = "https://api.github.com/users/AngelikaMallek/repos";

export const getPortfolio = async () => {
    try{
        const response = await axios.get(URL);
        const repos = response.data;
        return repos;
    } catch(error) {
        throw new Error("Failed to fetch repositories");
    }
}




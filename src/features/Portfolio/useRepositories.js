import { useState, useEffect } from "react";
import axios from 'axios'

const URL = "https://api.github.com/users/AngelikaMallek/repos";

export const useRepositories = () => {
    const [repositories, setRepositories] = useState(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await axios.get(URL)
                setRepositories(response.data)
                
            } catch {
                console.error("error");
            }
        }

        setTimeout(fetchRepositories, 1000);
    },[]);

    return repositories;
}


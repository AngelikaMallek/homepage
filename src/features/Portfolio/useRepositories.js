import { useState, useEffect } from "react";
import axios from 'axios'

const URL = "https://api.github.com/users/AngelikaMallek/repos";

export const useRepositories = () => {
    const [repositories, setRepositories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await axios.get(URL)
                setRepositories(response.data)
                setLoading(false);
            } catch {
                setError(true);
                setLoading(false);
            }
        }

        setTimeout(fetchRepositories, 5000);
    },[]);

    return {repositories, loading, error};
}


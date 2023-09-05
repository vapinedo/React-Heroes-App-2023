import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => axios.get(import.meta.env.VITE_DC_HEROES);

const useDCHeroesData = (onSuccess: any, onError: any) => {
    return useQuery(
        "dc-heroes",
        fetchSuperHeroes,
        {
            onError,
            onSuccess,
            select: (data) => {
                const DCHeroes = data.data.map((hero: any) => hero);
                return DCHeroes;
            }            
        }
    );
}

export default useDCHeroesData
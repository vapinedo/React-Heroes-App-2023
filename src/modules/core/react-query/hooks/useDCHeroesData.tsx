import axios from "axios"
import { useQuery } from "react-query"

const fetchFn = () => axios.get(import.meta.env.VITE_DC_HEROES);

const useDCHeroesData = (onSuccess: any, onError: any) => {
    return useQuery(
        "dc-heroes",
        fetchFn,
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
import axios from "axios"
import { useQuery } from "react-query"

const fetchFn = () => axios.get(import.meta.env.VITE_MARVEL_HEROES);

const useMarvelHeroesData = (onSuccess: any, onError: any) => {
    return useQuery(
        "marvel-heroes",
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

export default useMarvelHeroesData
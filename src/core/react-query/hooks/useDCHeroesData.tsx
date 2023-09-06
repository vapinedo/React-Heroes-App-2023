import axios from "axios"
import { useQuery } from "react-query"

const queryFn = () => axios.get(import.meta.env.VITE_DC_HEROES);

const useDCHeroesData = (onSuccess: any, onError: any) => {
    const queryData =  useQuery(
        "dc-heroes",
        queryFn,
        {
            onError,
            onSuccess,
            select: (data) => {
                const DCHeroes = data.data.map((hero: any) => hero);
                return DCHeroes;
            }            
        }
    );
    return queryData;
}

export default useDCHeroesData
import axios from "axios";
import { useQueries } from '@tanstack/react-query';

const fetchDCHeroes = () => axios.get(import.meta.env.VITE_DC_HEROES);
const fetchMarvelHeroes = () => axios.get(import.meta.env.VITE_MARVEL_HEROES);

const useAllHeroesData = () => {
    const [DCQuery, MarvelQuery] = useQueries({
        queries: [
            { queryKey: ["DCQuery"], fetchDCHeroes },
            { queryKey: ["MarvelQuery"], fetchMarvelHeroes }
        ]
    });

    
}

export default useAllHeroesData
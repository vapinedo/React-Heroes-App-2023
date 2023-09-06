import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeroCard from "../../components/HeroCard/HeroCard";
import { fetchMarvelHeroes } from "../../../../core/features/MarvelHeroesSlice";

const MarvelHeroesPage = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading} = useSelector((state) => state.MarvelHeroes);

  useEffect(() => {
    dispatch(fetchMarvelHeroes());
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <div className="alert alert-danger" role="alert">Error</div>
  }  

  return (
    <>
      <header>
        <h2>Marvel Heroes</h2>
      </header>
      <hr />

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {!isLoading && data.length && data.map((hero: any) => <HeroCard key={hero.name} hero={hero} />)}
      </div>    
    </>
  )
}
export default MarvelHeroesPage
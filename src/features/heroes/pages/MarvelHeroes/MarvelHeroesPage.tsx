import HeroCard from "../../components/HeroCard/HeroCard";
import useMarvelHeroesData from "../../../../core/react-query/hooks/useMarvelHeroesData";

const MarvelHeroesPage = () => {

  const onSuccess = (data: any) => {
    // console.log("Doing side effect when network request gets data", data);
  };
  
  const onError = (error: any) => {
    // console.log("Doing side effect when network rquest gets error", error);
  };
  
  const { isLoading, data, isError, error } = useMarvelHeroesData(onSuccess, onError);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <div className="alert alert-danger" role="alert">{error.message}</div>
  }

  return (
    <>
      <header>
        <h2>Marvel Heroes</h2>
      </header>
      <hr />

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((hero: any) => <HeroCard key={hero.name} hero={hero} />)}
      </div>    
    </>
  )
}
export default MarvelHeroesPage
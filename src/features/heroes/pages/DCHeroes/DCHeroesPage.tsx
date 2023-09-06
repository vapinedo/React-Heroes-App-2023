import { useSelector } from "react-redux";
import HeroCard from "../../components/HeroCard/HeroCard";

const DCHeroesPage = () => {

  const heroes = useSelector(state => state.hero.dc_heroes);

  return (
    <>
      <header>
        <h2>DC Heroes</h2>
      </header>
      <hr />

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {heroes.map((hero: any) => <HeroCard key={hero.name} hero={hero} />)}
      </div>    
    </>
  )
}
export default DCHeroesPage
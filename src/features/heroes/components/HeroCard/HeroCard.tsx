import "./HeroCard.css";
const heroesPath = "src/assets/heroes/";

const HeroCard = ({ hero }) => {
  return (
    <article className="col">
      <div className="card h-100">
        <img src={heroesPath + hero.image} className="card-img-top" alt={hero.name} />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <p className="card-text price">
            <i className="bx bx-dollar"></i>
            <span>{hero.price}</span>
          </p>
        </div>
      </div>
    </article>
  )
}
export default HeroCard
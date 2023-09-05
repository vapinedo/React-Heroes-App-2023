const HeroDetail = ({ hero }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={hero.image} className="card-img-top" alt={hero.name} />
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <p className="card-text">{hero.bio}</p>
        </div>
      </div>
    </div>
  )
}
export default HeroDetail
// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet

  return (
    <div className="item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1 className="heading">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem

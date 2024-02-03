// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planet-container">
      <div className="card" data-testid="planets">
        <h1 className="planet-heading">PLANETS</h1>
        <Slider>
          {planetsList.map(each => (
            <PlanetItem key={each.id} eachPlanet={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider

import '../stylesheets/location_info.scss'

export default function LocationInfo({ title }) {
  return (
    <div className="location-info">
      <h1>{title}</h1>
      <span className="planet">Planet</span>
      <span className="planet-dimension">Earth (Replacement Dimension)</span>
      <span className="dimension">Replacement Dimension</span>
      <div className="residents">
        <span className="icon">XX</span>
        <span className="residents-number">54 residents</span>
      </div>
    </div>
  )
}
import PropTypes from 'prop-types'
import { FiUsers } from 'react-icons/fi'
import '../../stylesheets/location_info.scss'

const LocationInfo = ({ title, location }) => {
  const { type, name, dimension, residents } = location

  return (
    <div className="location-info">
      <h1>{title}</h1>
      <span className="planet">{type}</span>
      <span className="planet-dimension">{name}</span>
      <span className="dimension">{dimension}</span>
      {residents && (
        <div className="residents">
          <span className="icon"><FiUsers /></span>
          <span className="residents-number">{residents.length} residents</span>
        </div>
      )}
    </div>
  )
}

LocationInfo.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.shape({
    type: PropTypes.string,
    string: PropTypes.string,
    dimension: PropTypes.string,
    residents: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  })
}

LocationInfo.defaultProps = {
  location: {
    type: 'Unknown Place',
    name: 'Unknown',
    dimension: 'Unknown Dimension',
    residents: []
  }
}

const locationPropTypes = PropTypes.shape({
  type: PropTypes.string,
  string: PropTypes.string,
  dimension: PropTypes.string,
  residents: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
})

const locationDefaultProps = {
  type: 'Unknown Place',
  name: 'Unknown',
  dimension: 'Unknown Dimension',
  residents: []
}

export { locationDefaultProps, locationPropTypes }

export default LocationInfo
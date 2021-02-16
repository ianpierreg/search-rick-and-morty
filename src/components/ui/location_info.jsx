import PropTypes from 'prop-types'
import { FiUsers } from 'react-icons/fi'
import { locationDefaultProps, locationPropTypes } from '../../helpers/common_prop_types'
import '../../stylesheets/location_info.scss'

const LocationInfo = ({ title, location }) => (
  <div className="location-info">
    <h1>{title}</h1>
    <span className="planet">{location.type}</span>
    <span className="planet-dimension">{location.name}</span>
    <span className="dimension">{location.dimension}</span>
    {location.residents && (
      <div className="residents">
        <span className="icon"><FiUsers /></span>
        <span className="residents-number">{location.residents.length} residents</span>
      </div>
    )}
  </div>
)

LocationInfo.propTypes = {
  title: PropTypes.string.isRequired,
  location: locationPropTypes
}

LocationInfo.defaultProps = { location: locationDefaultProps }





export default LocationInfo
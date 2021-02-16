import PropTypes from 'prop-types'
import { FiUsers } from 'react-icons/fi'
import '../../stylesheets/location_info.scss'
import { locationDefaultProps, locationPropTypes } from '../../helpers/common_prop_types'

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
  location: locationPropTypes
}

LocationInfo.defaultProps = { location: locationDefaultProps }





export default LocationInfo
import PropTypes from 'prop-types'
import { FiUsers } from 'react-icons/fi'
import { locationDefaultProps, locationPropTypes } from '../../helpers/common_prop_types'
import '../../stylesheets/location_info.scss'

const LocationInfo = ({ title, location }) => {
  const locationWithPlaceholders = { ...locationDefaultProps, ...location }

  return (
    <div className="location-info">
      <h1>{title}</h1>
      <span className="planet">{locationWithPlaceholders.type}</span>
      <span className="planet-dimension">{locationWithPlaceholders.name}</span>
      <span className="dimension">{locationWithPlaceholders.dimension}</span>
      {locationWithPlaceholders.residents && (
        <div className="residents">
          <span className="icon"><FiUsers /></span>
          <span className="residents-number">{locationWithPlaceholders.residents.length} residents</span>
        </div>
      )}
    </div>
  )
}

LocationInfo.propTypes = {
  title: PropTypes.string.isRequired,
  locationWithPlaceholders: locationPropTypes
}

LocationInfo.defaultProps = { locationWithPlaceholders: locationDefaultProps }





export default LocationInfo
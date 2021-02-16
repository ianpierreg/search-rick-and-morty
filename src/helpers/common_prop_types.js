import PropTypes from 'prop-types'

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

const characterPropTypes = PropTypes.shape({
  id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gender: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  episode: PropTypes.arrayOf(PropTypes.shape({
    air_date: PropTypes.number.isRequired
  })).isRequired,
  location: locationPropTypes,
  origin: locationPropTypes
})

const characterDefaultProps = PropTypes.shape({
  gender: 'Unknown',
  status: 'Unknown',
  species: 'Unknown',
  location: locationDefaultProps,
  origin: locationDefaultProps
})

export {
  locationDefaultProps,
  locationPropTypes,
  characterPropTypes,
  characterDefaultProps
}
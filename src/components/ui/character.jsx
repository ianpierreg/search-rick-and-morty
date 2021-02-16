import { useState } from 'react'
import PropTypes from 'prop-types'
import CharacterDetails from './character_details'
import { locationPropTypes, locationDefaultProps } from './location_info'
import classNames from 'classnames/bind'
import '../../stylesheets/character.scss'

const Character = ({ character, expanded }) => {
  const [showDetails, setShowDetails] = useState(false)
  const { name, status, species, image } = character

  return (
    <>
      <div
          className={classNames({ 'character-card': true, expanded })}
          onClick={() => !expanded && setShowDetails(true)}
      >
        <div className="character-image-wrapper">
          <img src={image} alt={name} className={status === 'Dead' && 'grayscale'}/>
        </div>
        <div className="character-info">
          <span className="name">{name}</span>
          <span className="species">{species}</span>
        </div>
      </div>
      <CharacterDetails
          show={showDetails}
          close={() => setShowDetails(false)}
          character={character}
      />
    </>
  )
}

Character.propTypes = {
  character: PropTypes.shape({
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
  }),
  expanded: PropTypes.bool
}

Character.defaultProps = {
  character: PropTypes.shape({
    gender: 'Unknown',
    status: 'Unknown',
    species: 'Unknown',
    location: locationDefaultProps,
    origin: locationDefaultProps
  }),
  expanded: false
}

export default Character
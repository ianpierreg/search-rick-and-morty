import { useState } from 'react'
import PropTypes from 'prop-types'
import CharacterDetails from './character_details'
import { characterDefaultProps, characterPropTypes } from '../../helpers/common_prop_types'
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
  character: characterPropTypes,
  expanded: PropTypes.bool
}

Character.defaultProps = {
  character: characterDefaultProps,
  expanded: false
}

export default Character
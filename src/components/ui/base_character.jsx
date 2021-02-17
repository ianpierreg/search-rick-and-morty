import React from 'react'
import PropTypes from 'prop-types'
import { characterDefaultProps, characterPropTypes } from '../../helpers/common_prop_types'
import '../../stylesheets/character.scss'

const BaseCharacter = ({ character, className, onClick, label }) => {
  const { name, status, species, image } = character

  return (
    <div
      role="button"
      tabIndex="0"
      aria-hidden="true"
      className={`character-card ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      <div className="character-image-wrapper">
        <img src={image} alt={name} className={status === 'Dead' && 'grayscale'} />
      </div>
      <div className="character-info">
        <span className="name" title={name}>{name}</span>
        <span className="species">{species}</span>
      </div>
    </div>
  )
}

BaseCharacter.propTypes = {
  character: characterPropTypes,
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
}

BaseCharacter.defaultProps = {
  character: characterDefaultProps,
  className: '',
  onClick: () => { }
}

export default BaseCharacter

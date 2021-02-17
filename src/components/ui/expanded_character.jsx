import React from 'react'
import { characterDefaultProps, characterPropTypes } from '../../helpers/common_prop_types'
import BaseCharacter from './base_character'
import '../../stylesheets/character.scss'

const ExpandedCharacter = ({ character }) => (
  <BaseCharacter
    character={character}
    className="expanded"
    label={`Card of the character ${character.name} from Rick and Morty TV Show`}
  />
)

ExpandedCharacter.propTypes = { character: characterPropTypes }

ExpandedCharacter.defaultProps = { character: characterDefaultProps, }

export default ExpandedCharacter

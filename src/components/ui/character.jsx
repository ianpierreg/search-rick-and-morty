import React, { useState } from 'react'
import { characterDefaultProps, characterPropTypes } from '../../helpers/common_prop_types'
import CharacterDetails from './character_details'
import BaseCharacter from './base_character'
import '../../stylesheets/character.scss'

const Character = ({ character }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <BaseCharacter
        character={character}
        onClick={() => setShowDetails(true)}
        label={`Clickable card of the character ${character.name} from Rick and Morty TV Show`}
      />
      <CharacterDetails
        show={showDetails}
        close={() => setShowDetails(false)}
        character={character}
      />
    </>
  )
}

Character.propTypes = { character: characterPropTypes }

Character.defaultProps = { character: characterDefaultProps }

export default Character

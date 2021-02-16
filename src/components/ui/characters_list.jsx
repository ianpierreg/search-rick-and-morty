import PropTypes from 'prop-types'
import Character from './character'
import { characterDefaultProps, characterPropTypes } from '../../helpers/common_prop_types'
import '../../stylesheets/characters_list.scss'

const CharactersList = ({ characters }) => {
  return (
    <div className="characters-list">
        {characters.map(char => <Character character={char} key={char.id} /> )}
    </div>
  )
}

CharactersList.propTypes = { characters: PropTypes.arrayOf(characterPropTypes()) }

CharactersList.defaultProps = {
  show: false,
  character: PropTypes.shape(characterDefaultProps)
}

export default CharactersList
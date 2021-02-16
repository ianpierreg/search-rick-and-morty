import PropTypes from 'prop-types'
import Character from './character'
import '../../stylesheets/characters_list.scss'
import { locationDefaultProps, locationPropTypes } from './location_info'
import CharacterDetails from "./character_details";

const CharactersList = ({ characters }) => {
  return (
    <div className="characters-list">
        {characters.map(char => <Character character={char} key={char.id} /> )}
    </div>
  )
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
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
  )
}

CharactersList.defaultProps = {
  show: false,
  character: PropTypes.shape({
    gender: 'Unknown',
    status: 'Unknown',
    species: 'Unknown',
    location: locationDefaultProps,
    origin: locationDefaultProps
  })
}

export default CharactersList
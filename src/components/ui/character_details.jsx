import PropTypes from 'prop-types'
import Modal from 'react-modal'
import { characterDefaultProps, characterPropTypes } from '../../helpers/common_prop_types'
import LocationInfo from './location_info'
import Character from './character'
import Button from './button'
import '../../stylesheets/character_details.scss'

const CharacterDetails = ({ show, close, character }) => {
  const { name, image, gender, status, species, episode, location, origin } = character

  const livingStatus = () => {
    if (status === 'Dead') return 'He is dead.'
    if (status === 'Alive') return 'He is alive and well.'
    return 'It can\'t be told if he is alive or dead.'
  }

  const about = `${name} is a ${gender} ${species}. ${livingStatus()}. Last seen in ${episode.pop()?.air_date}.`

  const stylesModalOverlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }

  const stylesModalContent = {
    background: 'none',
    padding: 0,
    width: '77%',
    display: 'flex',
    justifyContent: 'flex-end',
    border: 'none',
    margin: 'auto',
    overflow: 'hidden',
  }

  return (
    <Modal
      isOpen={show}
      portalClassName="character-modal-portal"
      overlayClassName="character-modal-overlay"
      style={{
        overlay: stylesModalOverlay,
        content: stylesModalContent
      }}
    >
      <div className="floating-card">
        <Character character={character} expanded />
      </div>
      <div className="modal-wrapper">
        <Button onClick={close} className="modal-close-button" text=""/>
        <div className="character-image-blurred">
          <img src={image} alt={name} />
        </div>
        <div className="details-wrapper">
          <div className="about-wrapper">
            <h1>About</h1>
            <p className="personal-info">
              {about}
            </p>
          </div>
          <LocationInfo location={origin} title="Origin" />
          <LocationInfo location={location} title="Location" />
        </div>
      </div>
    </Modal>
  )
}

CharacterDetails.propTypes = {
  character: characterPropTypes,
  show: PropTypes.bool,
  close: PropTypes.func.isRequired,
}

CharacterDetails.defaultProps = {
  character: characterDefaultProps,
  show: false
}

export default CharacterDetails
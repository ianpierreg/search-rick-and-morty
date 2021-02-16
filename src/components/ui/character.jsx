import { useState, } from 'react'
import CharacterDetails from './character_details'
import '../../stylesheets/character.scss'
import classNames from 'classnames/bind'

export default function Character({ character, expanded }) {
  const [showDetails, setShowDetails] = useState(false)
  const { id, name, status, species, image } = character

  return (
    <>
      <div
          className={classNames({ 'character-card': true,  expanded })}
          onClick={() => !expanded && setShowDetails(true)}
      >
        <div className="character-image-wrapper">
          <img src={image} alt="Rick Shanchez" className={status === 'Dead' && 'grayscale'}/>
        </div>
        <div className="character-info">
          <span className="name">{id+name}</span>
          <span className="species">{species}</span>
        </div>
      </div>
      <CharacterDetails show={showDetails} close={() => setShowDetails(false)}/>
    </>
  )
}

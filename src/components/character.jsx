import { useState, useEffect } from 'react'
import rick from '../images/rick.jpeg'
import '../stylesheets/character.scss'
import CharacterDetails from './character_details'

export default function Character({ character, expanded }) {
  const [showDetails, setShowDetails] = useState(false)
  const { id, name, status, species, image } = character

  useEffect(() => {
    console.log('sh', showDetails)
  }, [showDetails])

  const characterClass = () => {
    const classes = ['character-card']
    if (expanded) classes.push('expanded')
    return classes.join(' ')
  }

  return (
    <>
      <div className={characterClass()} onClick={() => !expanded && setShowDetails(true)}>
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

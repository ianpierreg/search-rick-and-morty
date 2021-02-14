import { useState, useEffect } from 'react'
import rick from '../images/rick.jpeg'
import '../stylesheets/character.scss'
import CharacterDetails from './character_details'

export default function Character({ alive, expanded }) {
  const [showDetails, setShowDetails] = useState(false)

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
          <img src={rick} alt="Rick Shanchez" className={!alive && 'grayscale'}/>
        </div>
        <div className="character-info">
          <span className="name">Rick Sanchez</span>
          <span className="species">Human</span>
        </div>
      </div>
      <CharacterDetails show={showDetails} close={() => setShowDetails(false)}/>
    </>
  )
}

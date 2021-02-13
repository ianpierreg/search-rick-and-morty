import { useState } from 'react'
import rick from '../images/rick.jpeg'
import '../stylesheets/character.scss'


export default function Character({ alive, }) {
  return (
    <div className="character-card">
      <div className="character-image-wrapper">
        <img src={rick} alt="Rick Shanchez" className={!alive && 'grayscale'}/>
      </div>
      <div className="character-info">
        <span className="name">Rick Sanchez</span>
        <span className="species">Human</span>
      </div>
    </div>
  )
}

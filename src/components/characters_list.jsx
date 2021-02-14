import '../stylesheets/characters_list.scss'
import Character from './character'

export default function CharactersList({ characters }) {

  return (
    <div className="characters-list">
        {characters.map(char => <Character character={char} key={char.id} /> )}
    </div>
  )
}
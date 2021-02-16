import Character from './character'
import '../../stylesheets/characters_list.scss'

export default function CharactersList({ characters }) {
  return characters ? (
    <div className="characters-list">
      { characters.length ? (
          characters.map(char => <Character character={char} key={char.id} /> )
      ) : (
          "No Character parent for filter"
      )}

    </div>
  ) : null
}
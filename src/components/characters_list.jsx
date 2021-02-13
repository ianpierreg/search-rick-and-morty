import loading from '../images/loading.svg'
import '../stylesheets/characters_list.scss'
import Character from "./character";

export default function CharactersList() {
  return (
    <div className="characters-list">
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
      <Character alive />
      <Character alive={false} />
    </div>
  )
}
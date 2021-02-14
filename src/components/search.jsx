import '../stylesheets/search.scss'
import Button from './button'

export default function Search({ setLoading }) {

  return (
    <div className="search-wrapper">
      <input type="search" className="search-input" placeholder="Search Characters"/>
      <Button
        type="button"
        onClick={() => setLoading(true)}
        className="search-button"
        text="Search"
      />
    </div>
  )
}


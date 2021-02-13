import '../stylesheets/search.scss'

export default function Search({ setLoading }) {

  return (
    <div className="search-wrapper">
      <input type="search" className="search-input" placeholder="Search Characters"/>
      <button type="button" onClick={() => setLoading(true)} className="search-button">Search</button>
    </div>
  )
}


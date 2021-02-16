import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import '../../stylesheets/search.scss'

const Search = ({ setSearchValue }) => {
  const [name, setName] = useState('')

  return (
  <div className="search-wrapper">
    <input
      type="search"
      className="search-input"
      placeholder="Search Characters"
      onChange={e => setName(e.target.value)}
      value={name}
    />
    <Button
      onClick={() => setSearchValue(name)}
      className="search-button"
      text="Search"
    />
  </div>
  )
}

Search.propTypes = { setSearchValue: PropTypes.func.isRequired, }

export default Search
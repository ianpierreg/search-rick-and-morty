import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import '../../stylesheets/search.scss'
import Toast from './toast'

const Search = ({ searchValue, setSearchValue }) => {
  const [name, setName] = useState('')
  const [toastData, setToastData] = useState()

  const onClick = () => {
    if (searchValue !== name) setSearchValue(name)
    else setToastData({
      title: 'I just retrieve that data',
      description: 'I refuse to search something I already know...',
    })
  }
  return (
    <div className="search-wrapper">
      <Toast toastData={toastData} />
      <input
        type="search"
        className="search-input"
        placeholder="Search Characters"
        onChange={e => setName(e.target.value)}
        value={name}
        aria-label="Search box"
        autoFocus
      />
      <Button
        onClick={onClick}
        className="search-button"
        text="Search"
      />
    </div>
  )
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired
}

export default Search
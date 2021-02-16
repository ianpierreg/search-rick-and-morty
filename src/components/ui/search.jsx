import { useState } from 'react'
import Button from './button'
import '../../stylesheets/search.scss'

export default function Search({ setSearchValue }) {
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
        type="button"
        onClick={() => setSearchValue(name)}
        className="search-button"
        text="Search"
      />
    </div>
  )
}


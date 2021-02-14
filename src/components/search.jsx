import { useState, useEffect } from 'react'
import '../stylesheets/search.scss'
import Button from './button'


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


import { useState, useEffect } from 'react'
import logo from '../images/logo.svg'
import useFetchCharacters from './hooks/fetch_characters'
import Search from './ui/search'
import LoadingCover from './ui/loading_cover'
import CharactersList from './ui/characters_list'
import Pagination from './ui/pagination'
import '../stylesheets/app.scss'

export default function Home() {
  const [showLoading, setShowLoading] = useState(false)
  const [searchValue, setSearchValue] = useState()
  const [currentPage, setCurrentPage] = useState(0)
  const { fetchCharacters, loading, characters, numberOfPages } = useFetchCharacters({ searchValue, currentPage })

  useEffect(() => { setShowLoading(loading) }, [loading, setShowLoading])

  useEffect(() => {
    if (searchValue && searchValue !== '') setCurrentPage(1) // TODO: do something about it maybe if undefined
  }, [searchValue, setCurrentPage])

  useEffect(() => {
    if (currentPage > 0) fetchCharacters() // TODO: ignored promise
  }, [currentPage, fetchCharacters])

  return (
    <>
      <div className={'app' + (showLoading && ' loading')}>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <Search setSearchValue={setSearchValue} />
        </header>
        {<CharactersList characters={characters} />}
      </div>
      {currentPage > 0 && (
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {showLoading && <LoadingCover />}
    </>
  )
}

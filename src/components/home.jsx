import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import logo from '../images/logo.svg'
import useFetchCharacters from './hooks/fetch_characters'
import Search from './ui/search'
import LoadingCover from './ui/loading_cover'
import CharactersList from './ui/characters_list'
import Pagination from './ui/pagination'
import EmptyState from './ui/empty_state'
import '../stylesheets/home.scss'

const Home = () => {
  const [showLoading, setShowLoading] = useState(false)
  const [searchValue, setSearchValue] = useState()
  const [currentPage, setCurrentPage] = useState(0)
  const {
    fetchCharacters,
    loading,
    characters,
    numberOfPages
  } = useFetchCharacters({ searchValue, currentPage })

  useEffect(() => { setShowLoading(loading) }, [loading, setShowLoading])

  useEffect(() => {
    if (searchValue && searchValue !== '') setCurrentPage(1)
  }, [searchValue, setCurrentPage])

  useEffect(() => {
    if (currentPage > 0) fetchCharacters()
  }, [currentPage, fetchCharacters])

  return (
    <>
      <div className={classNames({ home: true,  loading: showLoading })}>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <Search setSearchValue={setSearchValue} />
        </header>
        {characters && characters.length && <CharactersList characters={characters} />}
        {characters && !characters.length && <EmptyState />}
      </div>
      {currentPage > 0 && characters && characters.length && (
       <footer>
         <Pagination
           numberOfPages={numberOfPages}
           currentPage={currentPage}
           setCurrentPage={setCurrentPage}
         />
       </footer>
      )}
      {showLoading && <LoadingCover />}
    </>
  )
}

export default Home
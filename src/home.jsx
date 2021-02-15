import { useState, useEffect } from 'react'
import logo from './images/logo.svg'
import './stylesheets/app.scss'
import Search from './components/search'
import LoadingCover from './components/loading_cover'
import CharactersList from './components/characters_list'
import { useManualQuery } from 'graphql-hooks'
import useFetchCharacters from "./fetch_characters";


export default function Home() {
  const [showLoading, setShowLoading] = useState(false)
  const [searchValue, setSearchValue] = useState()
  const [currentPage, setCurrentPage] = useState(0)
  const { fetchCharacters, loading, characters, numberOfPages } = useFetchCharacters({ searchValue, currentPage })

  const pageClass = pageNumber => {
    const classes = ['page']
    if (pageNumber === currentPage) classes.push('current')
    return classes.join(' ')
  }

  useEffect(() => {
    setShowLoading(loading)
  }, [loading, setShowLoading])

  useEffect(() => {
    if(!searchValue) return
    setCurrentPage(1)

  }, [searchValue, setCurrentPage])

  useEffect(() => {
    if(currentPage === 0) return
    fetchCharacters() // TODO: ignored promise
  }, [currentPage])


  const homeClass = () => {
    const classes = ['app']
    if (showLoading) classes.push('loading')
    return classes.join(' ')
  }

  return (
    <>
      <div className={homeClass()}>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <Search setSearchValue={setSearchValue} />
        </header>
        {<CharactersList characters={characters} />}
      </div>
      <div className="pages">
        {numberOfPages && [...Array(numberOfPages)].map((_, index) => {
          const pageNumber = index + 1
          return  (
              <div className={pageClass(pageNumber)} key={pageNumber} onClick={(() => setCurrentPage(pageNumber))}>
                {pageNumber}
              </div>
          )
        })}
      </div>
      {showLoading && <LoadingCover />}
    </>
  )
}

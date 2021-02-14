import { useState, useEffect } from 'react'
import logo from './images/logo.svg'
import './stylesheets/app.scss'
import Search from './components/search'
import LoadingCover from './components/loading_cover'
import CharactersList from './components/characters_list'
import { useManualQuery } from 'graphql-hooks'

const QUERY = `query GetCharacters($name: String, $page: Int) {
  characters(page: $page, filter: { name: $name }) {
    info {
      count
    },
    results {
      id,
      name,
      status,
      species,
      type,
      gender,
      image
    }
  }
}`


export default function Home() {
  const [showLoading, setShowLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  const [searchValue, setSearchValue] = useState()
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [fetchCharacters, { loading, error, data }] = useManualQuery(QUERY, { variables: { name: searchValue, page: currentPage } })


  const pageClass = pageNumber => {
    const classes = ['page']
    if (pageNumber === currentPage) classes.push('current')
    return classes.join(' ')
  }

  useEffect(() => {
    console.log('load', loading)
    setShowLoading(loading)
    // TODO: treat error
    if(data && data.characters && data.characters.results) setCharacters(data.characters.results)
    if(data && data.characters && data.characters.info && data.characters.info.count) setNumberOfPages(Math.ceil(data.characters.info.count/20))

    console.log('er', error, data)
  }, [loading, error, data, setShowLoading])

  useEffect(() => {
    if(!searchValue) return
    setCurrentPage(1)
    setNumberOfPages(0)
    fetchCharacters() // TODO: ignored promise
  }, [searchValue, fetchCharacters])

  useEffect(() => {
    if(currentPage === 1) return
    fetchCharacters()
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
      </div>
      {showLoading && <LoadingCover />}
    </>
  )
}

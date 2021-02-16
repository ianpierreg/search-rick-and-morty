import { useState, useEffect } from 'react'
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


export default function useFetchCharacters({ searchValue, currentPage }) {
  const [characters, setCharacters] = useState([])
  const [numberOfPages, setNumberOfPages] = useState(0)
  const options = { variables: { name: searchValue, page: currentPage } }
  const [fetchCharacters, { loading, error, data }] = useManualQuery(QUERY, options)


  useEffect(() => {
    if(data && data.characters && data.characters.results) setCharacters(data.characters.results)
    if(data && data.characters && data.characters.info && data.characters.info.count) setNumberOfPages(Math.ceil(data.characters.info.count/20))
    // TODO: treat error
    console.log('er', error, data)
  }, [loading, error, data])

  return { fetchCharacters, loading, characters, numberOfPages }
}

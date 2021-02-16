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
      image,
      episode {
        air_date 
      },
      location {
        name,
        type,
        dimension,
        residents {
          id
        }
      },
      origin {
        name,
        type,
        dimension,
        residents {
          id
        }
      }
    }
  }
}`


export default function useFetchCharacters({ searchValue, currentPage }) {
  const [characters, setCharacters] = useState()
  const [numberOfPages, setNumberOfPages] = useState(0)
  const options = { variables: { name: searchValue, page: currentPage } }
  const [fetchCharacters, { loading, error, data }] = useManualQuery(QUERY, options)


  useEffect(() => {
    if(data?.characters?.results) setCharacters(data.characters.results)
    if(data?.characters?.info?.count) setNumberOfPages(Math.ceil(data.characters.info.count/20))
    // TODO: treat error
    if (data?.characters === null && error) setCharacters([])
  }, [loading, error, data])

  return { fetchCharacters, loading, characters, numberOfPages }
}

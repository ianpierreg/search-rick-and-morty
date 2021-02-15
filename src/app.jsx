import { useState, useEffect } from 'react'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import logo from './images/logo.svg'
import './stylesheets/app.scss'
import Search from './components/search'
import LoadingCover from './components/loading_cover'
import CharactersList from './components/characters_list'
import Home from './home'


const client = new GraphQLClient({ url: 'https://rickandmortyapi.com/graphql' })

export default function App() {
  const [showLoading, setShowLoading] = useState(false)
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    if (showLoading) setTimeout(() => {
      setShowList(true)
      setShowLoading(false)
    }, 3000)
  }, [showLoading])

  const appClass = () => {
    const classes = ['app']
    if (showLoading) classes.push('loading')
    return classes.join(' ')
  }

  return (
    <ClientContext.Provider value={client}>
      <Home />
    </ClientContext.Provider>
  )
}

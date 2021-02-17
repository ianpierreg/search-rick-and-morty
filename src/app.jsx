import React from 'react'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import Home from './components/home'
import loading from './images/loading.svg'
import './stylesheets/_base.scss'

export default function App() {
  const client = new GraphQLClient({ url: 'https://rickandmortyapi.com/graphql' })

  return (
    <ClientContext.Provider value={client}>
      <Home />
      <div className="hidden">
        <img src={loading} alt="" />
      </div>
    </ClientContext.Provider>
  )
}

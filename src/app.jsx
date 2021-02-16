import { GraphQLClient, ClientContext } from 'graphql-hooks'
import Home from './components/home'
import './stylesheets/app.scss'

export default function App() {
  const client = new GraphQLClient({ url: 'https://rickandmortyapi.com/graphql' })

  return (
    <ClientContext.Provider value={client}>
      <Home />
    </ClientContext.Provider>
  )
}

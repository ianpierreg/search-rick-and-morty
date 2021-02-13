import { useState, useEffect } from 'react'
import logo from './images/logo.svg'
import './stylesheets/app.scss'
import Search from './components/search'
import LoadingCover from './components/loading_cover'
import CharactersList from './components/characters_list'


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
    <>
      <div className={appClass()}>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <Search setLoading={setShowLoading} />
        </header>
        {showList && <CharactersList />}
      </div>
      {showLoading && <LoadingCover />}
    </>
  )
}

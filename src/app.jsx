import { useState } from 'react'
import logo from './images/logo.svg'
import loading from './images/loading.svg'
import './stylesheets/app.scss'
import Search from './components/search'
import LoadingCover from './components/loading_cover'


export default function App() {
  const [showLoading, setShowLoading] = useState(false)

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
      </div>
      {showLoading && <LoadingCover />}
    </>
  )
}

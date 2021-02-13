import logo from './images/logo.svg';
import './stylesheets/app.scss';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="search-wrapper">
          <input type="search" className="search-input" placeholder="Search Characters"/>
          <button type="button" className="search-button">Search</button>
        </div>
      </header>
    </div>
  );
}

export default App;

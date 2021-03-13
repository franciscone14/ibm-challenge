import React from 'react';
import NavBar from './components/NavBar';
import NavItem from './components/NavItem';
import logo from './logo.svg';
import ResultList from './pages/ResultList';
import SearchBug from './pages/SearchBug';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavItem title="Home" route="/" active={true}/>
        <NavItem title="My Searches" route="/searches" />
      </NavBar>
      {/* <SearchBug /> */}
      <ResultList />
    </div>
  );
}

export default App;

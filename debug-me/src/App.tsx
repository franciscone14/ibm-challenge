import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import NavDivider from './components/NavDivider';
import NavItem from './components/NavItem';
import ItemsContext from './contexts/ItemsContext';
import TokenContext from './contexts/TokenContext';
import logo from './logo.svg';
import { Question } from './models/Question';
import Login from './pages/Login';
import ResultList from './pages/ResultList';
import SearchBug from './pages/SearchBug';
import Searches from './pages/Searches';
import './styles/App.css';

function App() {
  const [token, setToken] = useState<string>("");
  const [items, setItems] = useState<Question[]>([]);

  useEffect(() => console.log(items), [items]);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if(setToken) setToken(token || "");
  }, [])

  return (
    <TokenContext.Provider value={{token, setToken}}>
        {
          token !== "" ? (
          <div className="App"> 
            <NavBar>
              <NavItem title="Home" route="/" active={true}/>
              <NavItem title="My Searches" route="/searches" />
              <NavDivider />
              <NavItem title="Sair" route="/auth/logout" onClick={() => sessionStorage.removeItem('token')} />
            </NavBar>
            <ItemsContext.Provider value={{items, setItems}}>
              <BrowserRouter>
                <Switch>
                  <Route path="/searches/:id" component={ResultList} />
                  <Route path="/searches" component={Searches} />
                  <Route path="/" component={SearchBug} />
                </Switch>
              </BrowserRouter>
            </ItemsContext.Provider>
          </div>
          ) : (
            <Login />
          )
        }
    </TokenContext.Provider>
  );
}

export default App;

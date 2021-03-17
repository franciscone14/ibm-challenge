import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import ItemsContext from '../contexts/ItemsContext';
import { Question } from '../models/Question';
import '../styles/pages/search-bug.css';
// import { Container } from './styles';
import logo from '../assets/login.png';
import useService from '../hooks/useService';
import QueryBugService from '../services/QueryBugService';

const SearchBug: React.FC = () => {
  const [ query, setQuery ] = useState<string>("");
  const [ id, setId ] = useState<string>();

  const queryService = useService(QueryBugService);

  function handleSubmit(e: React.MouseEvent){
    e.preventDefault();
    if(query !== ""){
      queryService.get<String>(query).subscribe(id => setId(id.toString()));
    }
  }

  if(!id){
    return (
      <form className="search-form">
        <div className="main">
          <div className="logo">
            <img src={logo} alt="Login Logo" style={{width: 500, height: 150}}/>
          </div>
          <div className="input">
            <input type="text" id="error-info" onChange={(event) => setQuery(event.target.value)} className="form-control" placeholder="Syntax error near ...." />
            <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Search</button>
          </div>
        </div>
      </form>
    );
  }
  else{
    return <Redirect to={`/searches/${id}`} />
  }
}

export default SearchBug;
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import ItemsContext from '../contexts/ItemsContext';
import { Question } from '../models/Question';
import '../styles/pages/search-bug.css';
// import { Container } from './styles';

const SearchBug: React.FC = () => {
  const [ query, setQuery ] = useState<string>("");
  const [ id, setId ] = useState<string>();

  function handleSubmit(e: React.MouseEvent){
    e.preventDefault();
    if(query !== ""){
      axios.get(`http://localhost:3000/search/${query}`)
      .then(res => {
        setId(res.data.id);
      })
      .catch(err => console.log(err.response));
    }
  }

  if(!id){
    return (
      <form className="container">
        <div className="row mx-auto my-auto">
          <div className="col">
            {/* <label htmlFor="error-info">Type your error details: </label> */}
            <input type="text" id="error-info" onChange={(event) => setQuery(event.target.value)} className="form-control" placeholder="Syntax error near ...." />
          </div>
          <div className="col">
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
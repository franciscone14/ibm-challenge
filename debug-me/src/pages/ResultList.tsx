import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, RouteComponentProps, useParams } from 'react-router';
import ItemsContext from '../contexts/ItemsContext';
import useService from '../hooks/useService';
import { Question } from '../models/Question';
import { Search } from '../models/Search';
import SearchService from '../services/SearchService';

import '../styles/pages/result-list.css';

interface ListItemProps {
  item: Question
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
  return (
    <div className="result card mb-3">
      <div className="card-header">
        {item.title}
      </div>
      <div className="card-body">
        <div id="tag-row">
          {
            item.tags.map((tag) => (
              <div key={tag} className="tag">
                <span className="badge bg-secondary">{tag}</span>
              </div>
            ))
          }
        </div>
        <div className="row mt-2">
          <div className="col-2">
            <span>Answered: </span>
          </div>
          <div className="col-1">
            {item.is_answered ? (
              <i className="fa fa-check-square fa-lg"></i>
            ): (
              <i className="fa fa-times fa-lg red"></i>
            )}
          </div>
          <div className="col">
            <span>Answer Counter: {item.answer_count}</span>
            {/* <span className="badge rounded-pill bg-danger">{item.answer_count}</span> */}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-3">
            <a href={item.link} className="btn btn-primary">See Question</a>            
          </div>
          {item.accepted_answer_id ? (
            <div className="col-4">
              <a href={`https://stackoverflow.com/a/${item.accepted_answer_id}`} target="_blank" className="btn btn-light">
                View Accepted Answer
              </a>            
            </div>
          ) : null}
        </div>
      </div>
      <div className="card-footer text-muted">
        {item.view_count} visualizations
      </div>
    </div>
  )
}

const ResultList: React.FC = () => {
  const { id } = useParams<{id:string}>();
  const [ items, setItems ] = useState<Question[]>([]);

  const searchService = useService(SearchService);

  useEffect(() => {
    searchService.get<Search>(id).subscribe(search => {
      const items = (search as Search).items
      setItems(items);
    })
  }, [])
  if(items.length === 0)
    return <Redirect to="/" />

  return (
      <div id="list-container" className="container">
        <h1>Related Questions</h1>
        <div className="container">
        {
          items.map(item => (
            <ListItem
              key={item.question_id}
              item={item}
            />
          ))
        }
        </div>
      </div>
  );
}

export default ResultList;
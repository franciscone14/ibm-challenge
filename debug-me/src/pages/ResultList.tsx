import React from 'react';
import { Question } from '../models/Question';

import '../styles/pages/result-list.css';

import {items} from '../items';

interface ListItemProps {
  item: Question
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        {item.title.toUpperCase()}
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
          <div className="col-4">
            <a href={item.link} className="btn btn-light">View Accepted Answer</a>            
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        {item.view_count} visualizations
      </div>
    </div>
  )
}

const ResultList: React.FC = () => {
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
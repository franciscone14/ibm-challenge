import React, { useEffect, useState } from 'react';
import { Search } from '../models/Search';
import useService from '../hooks/useService';
import SearchService from '../services/SearchService';

const SearchItem: React.FC<{search: Search, onClick: (e: React.MouseEvent) => void}> = ({search, onClick}) => {

  return (
    <tr>
      <td scope="row"><a href={`/searches/${search._id}`}>{search._id}</a></td>
      <td>{search.query}</td>
      <td>{search.items.length}</td>
      <td>{search.pagination}</td>
      <td>
        <button className="btn btn-danger" onClick={onClick}>
          <i className="fa fa-trash" style={{color: 'white'}}/>
        </button>
      </td>
    </tr>
  )
}

const Searches: React.FC = () => {
  const [searches, setSearches] = useState<Search[]>([]);
  const searchService = useService(SearchService);

  function deleteItem(e: React.MouseEvent, id: string){
    e.preventDefault();

    searchService.delete(id).subscribe();
    const newSearches = searches.filter(s => s._id !== id);
    setSearches(newSearches);
  }

  useEffect(() => {
    searchService.get<Search>().subscribe(searches => setSearches(searches as Search[]));
  }, []);

  return  (
      <div className="container">
        <table className="mt-5 table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Query</th>
              <th scope="col">Results</th>
              <th scope="col">Page</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody >
            {searches.map((search) => (
              <SearchItem key={search._id} search={search} onClick={(e: React.MouseEvent) => deleteItem(e, search._id)} />
            ))}
          </tbody>
        </table>
        
      </div>
  );
}

export default Searches;
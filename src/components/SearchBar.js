import {useState} from 'react';

const SearchBar = () => {

  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar">
      <form className="form-control">
        <label>Search</label>
        <input onChange={(e) => setSearchText(e.target.value)} type="text" value={searchText} />
      </form>
      
    </div>
  )
}

export default SearchBar

import {useState} from 'react';

const SearchBar = () => {

  const [searchText, setSearchText] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    console.log(searchText)
  }

  return (
    <div className="search-bar">
      <form className="form-control" onSubmit={submitSearch}>
        <label>Search</label>
        <input onChange={(e) => setSearchText(e.target.value)} type="text" value={searchText} />
      </form> 
    </div>
  )
}

export default SearchBar

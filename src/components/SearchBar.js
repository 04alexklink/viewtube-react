import {useState} from 'react';

const SearchBar = ({getVideos}) => {

  const [searchText, setSearchText] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    getVideos(searchText);
    setSearchText("");
  }
  
  return (
    <div className="search-bar">
      <form className="form-control">
        <label htmlFor="search">Search</label>
        <input id="search" onChange={(e) => setSearchText(e.target.value)} type="text" value={searchText} />
        <button onClick={submitSearch}>Search</button>
      </form> 
    </div>
  )
}

export default SearchBar

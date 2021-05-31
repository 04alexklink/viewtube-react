import {useState} from 'react';

const SearchBar = ({getVideos}) => {

  const [searchText, setSearchText] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    if(!searchText) {
      alert("Please enter a search");
      return;
    }
    getVideos(searchText);
    setSearchText("");
  }

  return (
    <div className="search-bar">
      <form className="form-control" onSubmit={submitSearch}>
        <label htmlFor="search">Search</label>
        <input id="search" onChange={(e) => setSearchText(e.target.value)} type="text" value={searchText} />
      </form> 
    </div>
  )
}

export default SearchBar

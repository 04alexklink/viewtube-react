import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import {useState} from 'react';

function App() {

  const [videos, setVideos] = useState([])
  
  const getVideos = async (searchTerm) => {
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const videos = await axios.get(baseUrl + "/search", {
      params: {
        q: searchTerm,
        part: "snippet",
        maxResults: 6,
        type: "video",
        key: process.env.REACT_APP_YOUTUBE_API_KEY
      }
    })
    return videos;
  }

  getVideos("cats")
  return (
    <div className="container">
    <Header title="Viewtube" ></Header>
    <SearchBar></SearchBar>
    </div>
  );
}

export default App;

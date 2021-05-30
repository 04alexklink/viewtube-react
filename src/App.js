import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentVideo from './components/CurrentVideo';
import axios from 'axios';
import {useState} from 'react';

function App() {

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  
  const getVideos = async (searchTerm) => {
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const response = await axios.get(baseUrl + "/search", {
      params: {
        q: searchTerm,
        part: "snippet",
        maxResults: 6,
        type: "video",
        key: process.env.REACT_APP_YOUTUBE_API_KEY
      }
    })
    setVideos(response.data.items);
    setCurrentVideo(response.data.items[0]);
  }

  return (
    <div className="container">
      <Header title="Viewtube" ></Header>
      <SearchBar getVideos={getVideos}></SearchBar>
      <div className="video-container">
      <CurrentVideo></CurrentVideo>

      </div>
    </div>
  );
}

export default App;

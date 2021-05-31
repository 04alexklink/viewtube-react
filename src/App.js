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
    setCurrentVideo(response.data.items[0]);
    setVideos(response.data.items);
  }

  return (
    <div className="container">
      <Header title="Viewtube" ></Header>
      <SearchBar getVideos={getVideos}></SearchBar>
      <div className="video-container">
      { videos.length > 0 ? <CurrentVideo video={currentVideo}></CurrentVideo> : "Please enter a search above"}
      </div>
    </div>
  );
}

export default App;

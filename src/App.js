import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentVideo from './components/CurrentVideo';
import RelatedVideosList from './components/RelatedVideosList';
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
    // what is happening above? is state being updated for both simultaneously?
    // Had a problem when conditional rendering was based on videos.length for CurrentVideo component.
    // Seemed to run setVideos and immediately update state and rendered Currentvideo component without currentvideo state being updated
    // so the component failed to render embedded JSX. Is it best to merge the state into one object or keep them separate as I have done here?
  }

  const updateCurrentVideo = (video) => {
    setCurrentVideo(video);
  }

  return (
    <div className="container">
      <Header title="Viewtube" ></Header>
      <SearchBar getVideos={getVideos}></SearchBar>
      <div className="video-container">
      { Object.keys(currentVideo).length > 0 ? <CurrentVideo video={currentVideo}></CurrentVideo> : "Please enter a search above"}
      {videos.length > 0 && <RelatedVideosList updateVideo={updateCurrentVideo} videos={videos}></RelatedVideosList>}
      </div>
    </div>
  );
}

export default App;

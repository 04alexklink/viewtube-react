
const RelatedVideoItem = ({video, updateVideo}) => {

  const onClick = (video) => {
    updateVideo(video);
  }
  return (
    <div key={video.id.videoId} onClick={() => onClick(video)} className="video-item-container">
      <img className="video-item-image" src={video.snippet.thumbnails.medium.url}></img>
      <div className="video-item-title">
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  )
}

export default RelatedVideoItem

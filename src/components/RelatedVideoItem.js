
const RelatedVideoItem = ({video}) => {
  return (
    <div className="video-item">
      <img src={video.snippet.thumbnails.medium.url}></img>
      <div className="video-item-title">
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  )
}

export default RelatedVideoItem

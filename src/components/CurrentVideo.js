
const CurrentVideo = ({video}) => {

  const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div className="current-video">
      <div className="video-wrapper">
      <iframe src={videoSrc} title="YouTube video player" frameBorder="0"></iframe>
      </div>
      <div className="current-video-info">
       <h4>{video.snippet.title}</h4>
       <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default CurrentVideo

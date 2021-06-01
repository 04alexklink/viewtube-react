import RelatedVideoItem from "./RelatedVideoItem"

const RelatedVideosList = ({videos, updateVideo, currentVideo}) => {

  const relatedVideos = videos.filter(video => {
    if(video.id.videoId !== currentVideo.id.videoId) {
      return video;
    }
  })


  return (
    <div className="videos-list">
     {relatedVideos.map((video) => (
      <RelatedVideoItem key={video.id.videoId} video={video} updateVideo={updateVideo}></RelatedVideoItem>
     ) 
     )}
    </div>
  )
}

export default RelatedVideosList

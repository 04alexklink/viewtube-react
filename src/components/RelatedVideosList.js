import RelatedVideoItem from "./RelatedVideoItem"

const RelatedVideosList = ({videos, updateVideo}) => {

  return (
    <div className="videos-list">
     {videos.map((video) => (
      <RelatedVideoItem key={video.id.videoId} video={video} updateVideo={updateVideo}></RelatedVideoItem>
     ) 
     )}
    </div>
  )
}

export default RelatedVideosList

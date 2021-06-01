import RelatedVideoItem from "./RelatedVideoItem"

const RelatedVideosList = ({videos}) => {

  

  return (
    <div className="videos-list">
     {videos.map((video) => (
      <RelatedVideoItem key={video.id.videoId} video={video}></RelatedVideoItem>
     ) 
     )}
    </div>
  )
}

export default RelatedVideosList

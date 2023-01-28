import { urls } from "../utils/video-data"

const Video = () => {
  const url = urls[Math.floor(Math.random() * 7)]

  return (
    <iframe
      src={`https://www.youtube.com/embed/${url}`}
      title="Embedded youtube"
      allow="autoplay"
      name="video-player"
      width="100%"
      height="100%"
    />
  )
}

export default Video
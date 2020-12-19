import React from 'react'
import '../assets/styles/components/Video.scss'

const Video = () => {
  return (
    <div className="Video">
      <iframe className="video-youtube" width="560" height="315" src="https://www.youtube.com/embed/wgfCGxFEc3Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Video

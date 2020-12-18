import React from 'react'
import '../assets/styles/components/Video.scss'

const Video = () => {
  return (
    <video className="Video" controls preload="auto">
      <source src="https://platzi.com/f578389b-c130-4990-8464-0b05df15b762"></source>
    </video>
  )
}

export default Video

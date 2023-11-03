import React from 'react'
import UntitledvideoMadewithClipchamp from '../Assets/Untitled video - Made with Clipchamp.mp4'
//C:\Users\eoini\Desktop\frontend\src\

const Video = () => {
  return (
    <div>
        <video  src = {UntitledvideoMadewithClipchamp} autoPlay loop muted />
    </div>
  )
}

export default Video
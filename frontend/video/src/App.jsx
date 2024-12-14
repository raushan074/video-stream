import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'
import { useRef } from 'react'
function App() {
    const playerRef=useRef(null)
    const videoLink="http://localhost:8000/uploads/courses/753b648f-5ae4-4410-be57-d9c85a799469/index.m3u8"

    const VideoPlayerOptions={
      controls:true,
      responsive:true,
      fluid:true,
      sources:[
        {
          src:videoLink,
          typeof:"application/x-mpegURL"
        }
      ]

    }

    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on("waiting", () => {
        videojs.log("player is waiting");
      });
  
      player.on("dispose", () => {
        videojs.log("player will dispose");
      });
    };
  return (
    <>
       <div>
        <h1>Video Player</h1>
       </div>

       <VideoPlayer
        options={VideoPlayerOptions}
        onReady={handlePlayerReady}
        />
    </>
  )
}

export default App

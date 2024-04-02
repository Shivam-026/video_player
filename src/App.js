import React, { useState } from 'react';
import './App.css';
import { playlistData } from './playlistData';
import ReactPlayer from 'react-player';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(playlistData.videos[0]);
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="App">
      <div className="video-container">
        <VideoPlayer video={selectedVideo} />
      </div>
      <div className="playlist-container">
        <VideoList videos={playlistData.videos} onVideoSelect={handleVideoSelect} />
      </div>
    </div>
  );
}

function VideoPlayer({ video }) {
  return (
    <>  <div className='title'><h5>{video.title}</h5>
      <div className="video-player">
        <ReactPlayer
          url={video.sources[0]}
          playing
          controls
          light={<img src={video.thumb}
            width='100%'
            height='100%' />}
        /></div>
    </div>
      <div className="description">
        <p><b>Description</b> <br></br>{video.description}</p>
      </div>
    </>
  );
}

function VideoList({ videos, onVideoSelect }) {
  return (
    <>
      <div className='header1'>
        <h4>Playlist</h4>

        <div className="video-list">

          <ul>
            {videos.map((video, index) => (
              <li key={index} onClick={() => onVideoSelect(video)}>
                {/* <img src={video.thumb} className="video-thumbnail" /> */}
                <div>
                  <h2>{video.title}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}


export default App;

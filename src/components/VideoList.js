import React from 'react';
import useVideos from '../hooks/Videos';
import PlayButton from "./PlayButton";
import Video from "./Video";
import axios from 'axios';

const VideoList = ({editVideo}) => {
  const URL =  'https://my.api.mockaroo.com/video.json?key=ad62e250';

  const handleClick = async () => {
    const res = await axios.get(URL);
    console.log(res);
  }

  const videos = useVideos();

  return (
    <>
      <button onClick={handleClick}>Get Videos</button>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("play...", video.title)}
            onPause={() => console.log("pause...", video.title)}
          >
            Play
          </PlayButton>
        </Video>
      ))}
    </>
  )
}

export default VideoList
import React, { useContext } from 'react';
// import VideoDispatchContext from '../context/VideoDispatchContext';
import VideosContext from '../context/VideosContext';
import PlayButton from "./PlayButton";
import Video from "./Video";

const VideoList = ({editVideo}) => {

  const videos = useContext(VideosContext);
  // const dispatch = useContext(VideoDispatchContext);

  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          // dispatch={dispatch}
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
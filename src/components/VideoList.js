import React from 'react';
import PlayButton from "./PlayButton";
import Video from "./Video";

const VideoList = ({videos, deleteVideo, editVideo}) => {
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
          deleteVideo={deleteVideo}
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
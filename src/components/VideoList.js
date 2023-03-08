import React, { useEffect } from 'react';
import useVideos from '../hooks/Videos';
import PlayButton from "./PlayButton";
import Video from "./Video";
import axios from 'axios';
import useVideoDispatch from '../hooks/VideoDispatch';

const VideoList = ({editVideo}) => {
  const URL =  'https://my.api.mockaroo.com/video.json?key=ad62e250';

  const videos = useVideos();
  const dispatch = useVideoDispatch();

  // const [videos, setVideos] = useState([]);
  const handleClick = async () => {
    const res = await axios.get(URL);
    console.log(res);
    // setVideos(res.data);
    dispatch({type: "LOAD_VIDEOS", payload: res.data});
  }

  useEffect(() => {
    handleClick();
  }, []);


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
import React, { useCallback, useEffect, useMemo } from "react";
import useVideos from "../hooks/Videos";
import PlayButton from "./PlayButton";
import Video from "./Video";
import axios from "axios";
import useVideoDispatch from "../hooks/VideoDispatch";

const VideoList = ({ editVideo }) => {
  const URL = "https://my.api.mockaroo.com/video.json?key=ad62e250";

  const videos = useVideos();
  const dispatch = useVideoDispatch();

  // const [videos, setVideos] = useState([]);
  const handleClick = async () => {
    const res = await axios.get(URL);
    console.log(res);
    // setVideos(res.data);
    dispatch({ type: "LOAD_VIDEOS", payload: res.data });
  };

  useEffect(() => {
    handleClick();
  }, []);

  const play = useCallback(() => console.log("play..."), []);
  const pause = useCallback(() => console.log("pause..."), []);

  const memoizedPlayButton = useMemo(() => {
    <PlayButton onPlay={play} onPause={pause}>
      Play
    </PlayButton>;
  }, [play, pause]);

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
          {memoizedPlayButton}
        </Video>
      ))}
    </>
  );
};

export default VideoList;

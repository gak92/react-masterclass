import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videosDB from "./data/videos";

function App() {

  const [videos, setVideos] = useState(videosDB);

  const handleClick = (e) => {
    e.stopPropagation();
    console.log("add video...");
    setVideos([
      ...videos,
      {
        id: videos.length+1,
        title: "Demo Tutorial",
        views: "119K",
        time: "19 Days ago",
        channel: "Friend Dost",
        verified: true
      }
    ]);
  }

  return (
    <div className="App" onClick={() => console.log('App')}>
      <div onClick={handleClick}>
        <button>Add Video</button>
      </div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("play...", video.title)}
            onPause={() => console.log("pause...", video.title)}
          >
            Play
          </PlayButton>
        </Video>
      ))}

      <div>
        {/* <PlayButton
          message="play-msg"
          onPlay={() => console.log("play...")}
          onPause={() => console.log("pause...")}
        >
          Play
        </PlayButton> */}
        {/* <PlayButton message="pause-msg" onSmash={() => alert("pauseeeee")}>
          Pause
        </PlayButton> */}
      </div>

      <div>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;

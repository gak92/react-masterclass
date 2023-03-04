import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/videos";

function App() {
  return (
    <div className="App" onClick={() => console.log('App')}>
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
    </div>
  );
}

export default App;

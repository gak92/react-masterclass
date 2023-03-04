import "./App.css";
import Video from "./components/Video";
import videos from "./data/videos";

function App() {  

  return (
    <div className="App">
      {
        videos.map((video) => <Video
        key={video.id}
        id={video.id}
        title={video.title}
        views={video.views}
        time={video.time}
        channel={video.channel}
        verified={video.verified}
      />)
      }
      
    </div>
  );
}

export default App;

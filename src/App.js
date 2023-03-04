import { useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import videosDB from "./data/videos";

function App() {
  const [videos, setVideos] = useState(videosDB);

    const addVideo = (video) => {
    setVideos([
      ...videos,
      {...video, id:videos.length+1}
    ]);
  }

  return (
    <div className="App" onClick={() => console.log('App')}>

      <AddVideo addVideo={addVideo}></AddVideo>

      <VideoList videos={videos}></VideoList>

    </div>
  );
}

export default App;

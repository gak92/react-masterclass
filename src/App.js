import { useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import videosDB from "./data/videos";

function App() {
  const [videos, setVideos] = useState(videosDB);
  const [editableVideo, setEditableVideo] = useState(null);

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const deleteVideo = (id) => {
    console.log(id);
    setVideos(videos.filter((video) => video.id !== id));
  };

  const editVideo = (id) => {
    console.log(id);
    setEditableVideo(videos.find((video) => video.id === id));
  };

  const updateVideo = (video) => {
    console.log(video);
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  };

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo
        addVideo={addVideo}
        updateVideo={updateVideo}
        editableVideo={editableVideo}
      ></AddVideo>

      <VideoList
        videos={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      ></VideoList>
    </div>
  );
}

export default App;

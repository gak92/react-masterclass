import { useReducer, useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import videosDB from "./data/videos";

function App() {

  const [editableVideo, setEditableVideo] = useState(null);

  const videoReducer = (videos, action) => {
    switch(action.type) {
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case 'DELETE':
        return videos.filter((video) => video.id !== action.payload);
      case 'UPDATE':
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  };

  // const [videos, setVideos] = useState(videosDB);
  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  const addVideo = (video) => {
    // action: {type: 'ADD', payload:video}
    dispatch({type: 'ADD', payload: video});
    // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const deleteVideo = (id) => {
    console.log(id);
    dispatch({type: 'DELETE', payload: id});
    // setVideos(videos.filter((video) => video.id !== id));
  };

  const editVideo = (id) => {
    console.log(id);
    setEditableVideo(videos.find((video) => video.id === id));
  };

  const updateVideo = (video) => {
    console.log(video);
    dispatch({type: 'UPDATE', payload: video});

    // const index = videos.findIndex((v) => v.id === video.id);
    // const newVideos = [...videos];
    // newVideos.splice(index, 1, video);
    // setVideos(newVideos);
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

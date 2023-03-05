import { useContext, useReducer, useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
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
  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  const themeContext = useContext(ThemeContext);
  console.log({themeContext});

  const [mode, setMode] = useState('darkMode');

  const editVideo = (id) => {
    console.log(id);
    setEditableVideo(videos.find((video) => video.id === id));
  }; 

  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App ${mode}`} onClick={() => console.log("App")}>
        <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>
          Mode
        </button>
        <AddVideo
          dispatch={dispatch}
          editableVideo={editableVideo}
        ></AddVideo>

        <VideoList
          videos={videos}
          dispatch={dispatch}
          editVideo={editVideo}
        ></VideoList>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

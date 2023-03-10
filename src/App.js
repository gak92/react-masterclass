import { useCallback, useContext, useReducer, useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import { Counter } from "./components/Counter";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import VideosContext from "./context/VideosContext";
// import videosDB from "./data/videos";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);

  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "LOAD_VIDEOS":
        return action.payload;
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  };
  // const [videos, dispatch] = useReducer(videoReducer, videosDB);
  const [videos, dispatch] = useReducer(videoReducer, []);

  const themeContext = useContext(ThemeContext);
  console.log({ themeContext });

  const [mode, setMode] = useState("darkMode");

  
  const editVideo = useCallback((id) => {
    console.log(id);
    setEditableVideo(videos.find((video) => video.id === id));
  }, [videos]);

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <Counter></Counter>

          <div className={`App ${mode}`} onClick={() => console.log("App")}>
            <button
              onClick={() =>
                setMode(mode === "darkMode" ? "lightMode" : "darkMode")
              }
            >
              Mode
            </button>
            <AddVideo editableVideo={editableVideo}></AddVideo>
            <VideoList editVideo={editVideo}></VideoList>
          </div>

        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

import "./App.css";
import Video from "./components/Video";

function App() {
  let obj = {
    title: "React JS Tutorial",
    views: "10k",
    time: "10 days ago",
    channel: "Coder Dost",
  };
  
  return (
    <div className="App">
      <div>Videos</div>
      <Video {...obj} />
      <Video
        title="Node JS Tutorial"
        views="100k"
        time="1 month ago"
        channel="Friend Coder"
      />
      <Video
        title="Mongo DB Tutorial"
        views="150k"
        time="3 month ago"
        channel="Coder Dost"
      />
    </div>
  );
}

export default App;

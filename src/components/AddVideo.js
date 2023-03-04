import React, { useState } from "react";
import "./AddVideo.css";

const initialState = {
  title: '',
  views: '',
  time: "19 Days ago",
  channel: "Friend Dost",
  verified: false,
};

const AddVideo = ({ addVideo }) => {

  const [video, setVideo] = useState(initialState);

  const handleChange = (e) => {
    e.stopPropagation();
    // console.log(e.target.name, e.target.value);
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(video);
    setVideo(initialState);
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="Views"
        value={video.views}
      />
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
};

export default AddVideo;

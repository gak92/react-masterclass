import React, { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState = {
  title: '',
  views: '',
  time: "19 Days ago",
  channel: "Friend Dost",
  verified: false,
};

const AddVideo = ({ addVideo, updateVideo, editableVideo }) => {

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
    if(editableVideo) {
      updateVideo(video);
    }
    else {
      addVideo(video);
    }
    setVideo(initialState);
  };

  useEffect(() => {
    if(editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

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
      <button onClick={handleSubmit}>
        {editableVideo? 'Edit Video' : 'Add Video'}
      </button>
    </form>
  );
};

export default AddVideo;
import "./AddVideo.css";
import React, { useContext, useEffect, useState } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

const initialState = {
  title: '',
  views: '',
  time: "19 Days ago",
  channel: "Friend Dost",
  verified: false,
};

const AddVideo = ({ editableVideo }) => {

  const [video, setVideo] = useState(initialState);
  const dispatch = useContext(VideoDispatchContext);

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
      dispatch({type: 'UPDATE', payload: video});
    }
    else {
      dispatch({type: 'ADD', payload: video});
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

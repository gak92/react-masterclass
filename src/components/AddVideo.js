import "./AddVideo.css";
import React, {useEffect, useRef, useState } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

const initialState = {
  title: '',
  views: '',
  time: "19 Days ago",
  channel: "Friend Dost",
  verified: false,
};

const AddVideo = ({ editableVideo }) => {

  const inputRef = useRef(null);
  const [video, setVideo] = useState(initialState);
  const dispatch = useVideoDispatch();

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
    // inputRef.current.value = 'demo';
    inputRef.current.focus();

  }, [editableVideo]);

  return (
    <form>
      <input
        ref={inputRef}
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

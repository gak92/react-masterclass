import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";
import "./Video.css";

const Video = ({
  id,
  title,
  channel = "Coder Dost",
  views,
  time,
  verified,
  editVideo,
  children
}) => {

  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch();

  // useEffect(() => {
  //   const idx = setInterval(() => {
  //     console.log("video playing... ", id);
  //   }, 3000);

  //   return () => {
  //     clearInterval(idx);
  //   }
  // }, [id]);
  
  return (
    <div className={`container ${theme}`}>
      <button className="close" onClick={() => dispatch({type: 'DELETE', payload: id})}>
        X
      </button>
      <button className="edit" onClick={() => editVideo(id)}>
        Edit
      </button>
      <div className="pic">
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="random pic" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">
        {channel} {verified ? "✅" : null}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Video;

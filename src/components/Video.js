import React from "react";
import "./Video.css";

const Video = ({
  id,
  title,
  channel = "Coder Dost",
  views,
  time,
  verified,
  dispatch,
  editVideo,
  children
}) => {
  
  
  return (
    <div className="container">
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

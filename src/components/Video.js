import React from 'react';
import './Video.css';

const Video = ({title, channel="Coder Dost", views, time}) => {
  // let bg = 'dark';

  return (
    <div className='container'>
      <div>
        <img src='http://placeimg.com/160/90/any' alt='random pic' />
      </div>
      <div className='title'>{title}</div>
      <div className='channel'>{channel}</div>
      <div className='views'>{views} views <span>.</span> {time}</div>

    </div>
  )
}

export default Video;
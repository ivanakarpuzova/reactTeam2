import React from 'react';

export const BackgroundVideo = ({ videoURL }) => {
  return (
    <video id="background-video" loop autoPlay style={{ width: '100vw' }}>
      <source src={videoURL} type="video/mp4" />
      <source src={videoURL} type="video/ogg" />
    </video>
  );
};

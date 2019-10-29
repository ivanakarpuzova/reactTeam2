import React from 'react';
import { BackgroundVideo } from '../components/BackgroundVideo';
import ImageCard from '../components/ImageCard';

export const HomePage = () => {
  return (
    <div>
      <BackgroundVideo videoURL="/video.mp4" />
      <ImageCard />
    </div>
  );
};

import React from 'react';
import { BackgroundVideo } from '../components/BackgroundVideo';
import ImageCard from '../components/ImageCard';
import CustomCarousel from '../components/CustomCarousel';

export const HomePage = () => {
  return (
    <div>
      <div id="section1">
        <BackgroundVideo videoURL="/video.mp4" />
      </div>
      <div id="section2">
        <ImageCard />
      </div>
      <div id="section3" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '70%' }}>
          <CustomCarousel />
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { BackgroundVideo } from '../components/BackgroundVideo';
import ImageCard from '../components/ImageCard';
import CustomSlider from '../components/CustomSlider';

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
        <div style={{ width: '80%' }}>
          <CustomSlider />
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { BackgroundVideo } from '../components/BackgroundVideo';
import ImageCard from '../components/ImageCard';
import CustomCarousel from '../components/CustomCarousel';
import Chatting from '../components/Chatting';
import Dasboard_new from '../DashNew/Dashboard_new';

const homeStyle = {
  position: 'fixed',
  bottom: '0px',
  right: '0px'
};

export const HomePage = () => {
  return (
    <div>
      <div style={{ homeStyle }}>
        <Chatting />
      </div>
      <div id="section1">
        <BackgroundVideo videoURL="/video.mp4" />
      </div>
      <div id="section2">
        <ImageCard />
      </div>
      <div id="section3">
        <Dasboard_new />
      </div>
      <div id="section4" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '70%' }}>
          <CustomCarousel />
        </div>
      </div>
    </div>
  );
};

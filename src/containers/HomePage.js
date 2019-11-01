import React from 'react';
import { BackgroundVideo } from '../components/BackgroundVideo';
import ImageCard from '../components/ImageCard';
import CustomCarousel from '../components/CustomComponents/CustomCarousel';
import Chatting from '../components/Chatting';
import Dasboard_new from '../components/DashNew/Dashboard_new';

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
        <BackgroundVideo videoURL="/final1.mp4" />
      </div>
      <div id="section2" style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageCard />
      </div>
      <div id="section3" style={{ display: 'flex', justifyContent: 'center' }}>
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

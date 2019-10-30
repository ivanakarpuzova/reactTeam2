import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function CustomSlider() {
  return (
    <Carousel autoPlay showThumbs={false}>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/zena.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/maz.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/zena2.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

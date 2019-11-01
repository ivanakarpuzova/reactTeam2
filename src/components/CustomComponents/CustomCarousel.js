import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function CustomCarousel() {
  return (
    <Carousel
      autoPlay
      centerSlidePercentage={true}
      infiniteLoop={true}
      interval={'2500'}
      transition={'550'}
    >
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/c2.jpg" />
        <p className="legend">Пластика расфрлана</p>
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/c4.jpg" />
        <p className="legend" height="100px">
          Акција на велешкото езеро Младост успешно завршена со најмладите{' '}
        </p>
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/c5.jpg" />
        <p className="legend">
          Дел од акцијата спроведена на езерото Младост, каде беа исчистени
          пластични шишиња, хартии собрани и сортирани подоцна.
        </p>
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/c6.jpg" />
        <p className="legend">Расфрлано ѓубре кај Градежен факултет</p>
      </div>
      <div style={{ height: '70vh' }}>
        <img style={{ height: '100%', objectFit: 'cover' }} src="/c9.jpg" />
        <p className="legend">
          Повеќе волонтери се собраа со цел да го исчистат ѓубрето насобрано во
          Карпош 2 Скопје заедно со најмладите се вклучија во акцијата.
        </p>
      </div>
    </Carousel>
  );
}

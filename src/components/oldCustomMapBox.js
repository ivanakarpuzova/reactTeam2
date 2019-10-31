import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

export default function CustomMapBox() {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidG9sZXZza2EiLCJhIjoiY2syZDYybHkwMDQ5cDNkczR4djN2NXZvbCJ9.0pt_cgw7frm9hlxZJpIi9w'
  });

  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        zoom={[8]}
        center={[21.7453, 41.6086]}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'park-15' }}>
          <Feature coordinates={[21.7453, 41.6086]} />
        </Layer>
      </Map>
      ;
    </div>
  );
}

import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl';
import { Button } from '@material-ui/core';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoidG9sZXZza2EiLCJhIjoiY2syZDYybHkwMDQ5cDNkczR4djN2NXZvbCJ9.0pt_cgw7frm9hlxZJpIi9w'
});
class CustomMapBox extends React.Component {
  state = {
    viewport: {
      width: 'auto',
      height: '30vh',
      latitude: 41.6086,
      longitude: 21.7453,
      zoom: 8
    },
    userLocation: {},
    zoom: [8]
    //   center: [-87.63097788775872, 41.767174164037044]
  };
  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let setUserLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
      let newViewport = {
        height: '30vh',
        width: 'auto',
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 8
      };
      this.setState({
        viewport: newViewport,
        userLocation: setUserLocation
      });
    });
  };

  render() {
    console.log(this.state.userLocation);
    return (
      <div className="App">
        <Button
          style={{
            background: 'rgba(142, 135, 113, 0.28)',
            marginBottom: '2px'
          }}
          onClick={this.setUserLocation}
        >
          Моја локација
        </Button>
        <div className="map">
          <ReactMapGL
            {...this.state.viewport}
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            onViewportChange={viewport => this.setState({ viewport })}
            mapboxApiAccessToken="pk.eyJ1IjoidG9sZXZza2EiLCJhIjoiY2syZDYybHkwMDQ5cDNkczR4djN2NXZvbCJ9.0pt_cgw7frm9hlxZJpIi9w"
          >
            {Object.keys(this.state.userLocation).length !== 0 ? (
              <Marker
                latitude={this.state.viewport.latitude}
                longitude={this.state.viewport.longitude}
              >
                <img
                  className="location-icon"
                  src="place.png"
                  width="30px"
                  height="30px"
                />
              </Marker>
            ) : (
              <div></div>
            )}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}
export default CustomMapBox;

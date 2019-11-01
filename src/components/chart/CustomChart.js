import React from 'react';
import Chart from 'react-google-charts';

export default function CustomChart() {
  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType="GeoChart"
      data={[
        ['City', 'Name', 'Clean'],
        ['MK-19', 'Gostivar', 36],
        ['MK-40', 'Kicevo', 13],
        ['MK-76', 'Tetovo', 0],
        ['MK-56', 'Strumica', 12],
        ['MK-13', 'Veles', 42],
        ['MK-10', 'Valandovo', 3],
        ['MK-26', 'Dojran', 28],
        ['MK-11', 'Radovis', 15],
        ['MK-30', 'Makedonski Brod', 4],
        ['MK-33', 'Probistip', 35],
        ['MK-37', 'Stip', 12],
        ['MK-69', 'Sveti Nikole', 12],
        ['MK-71', 'Kumanovo', 6],
        ['MK-36', 'Kavadarci', 50],
        ['MK-53', 'Krusevo', 42],
        ['MK-54', 'Negotino', 46],
        ['MK-55', 'Bitola', 3],
        ['MK-58', 'Struga', 25],
        ['MK-60', 'Delcevo', 9],
        ['MK-62', 'Prilep', 0],
        ['MK-64', 'Stip', 33],
        ['MK-66', 'Ohrid', 5]
      ]}
      options={{
        region: 'MK',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: { colors: ['#324945', '#9a9a9a', '#00853f'] },
        backgroundColor: '#fff',
        datalessRegionColor: '#fff',
        defaultColor: '#f5f5f5'
      }}
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
      rootProps={{ 'data-testid': '4' }}
    />
  );
}

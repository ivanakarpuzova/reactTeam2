import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#00853f', '#9a9a9a', '#324945'],
        chart: {
          //  width : 700
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val;
            },
            title: {
              formatter: function(seriesName) {
                return '';
              }
            }
          }
        },
        legend: {
          show: false
        }
      },
      series: [573, 109, 78],
      labels: ['Чиста околина', 'Загадена околина', 'Акции во тек']
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="400"
        />
      </div>
    );
  }
}

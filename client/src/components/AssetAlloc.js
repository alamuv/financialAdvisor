import React from 'react';
import assetPlan from '../../data/data';
import {Doughnut} from 'react-chartjs';
import Chart from 'react-chartjs';
// const DoughnutChart = require("react-chartjs").Doughnut;
// const Chart = require("react-chartjs");

class AssetAlloc extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.riskLevel);
    this.state = {
      assetAlloc: this.props.assetAlloc
    }
    console.log('Inside AssetAlloc', this.props.riskLevel, this.state.assetAlloc)
  }

  renderDonut(){
    // var chartData = {};
    // chartData.labels = [];
    // chartData.datasets = [];

    // var dataset = {};
    // dataset.data = [];
    // dataset.backgroundColor = ["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB" ];
    // dataset.hoverBackgroundColor = ["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB" ];

    // for (var key in this.state.assetAlloc) {
    //   //The current property is not a direct property of assetAlloc
    //   if (!this.state.assetAlloc.hasOwnProperty(key)) {
    //     continue;
    //   }
    //   chartData.labels.push(key);
    //   dataset.data.push(this.state.assetAlloc[key])
    // }
    // chartData.datasets.push(dataset);

    var chartData = [];

    var color = [
      {
        color: '#F7464A',
        highlight: '#FF5A5E'
      },
      {
        color: '#46BFBD',
        highlight: '#5AD3D1'
      },
      {
        color: '#FDB45C', 
        highlight: '#FFC870'
      },
      {
        color: '#949FB1',
        highlight: '#A8B3C5'
      },
      {
        color: '#4D5360',
        highlight: '#616774'
      }
    ];

    var i = 0;
    for (var key in this.state.assetAlloc) {
      var data = {};
      data.value = this.state.assetAlloc[key];
      data.label = key;
      data.color = color[i].color;
      data.highlight = color[i].highlight;
      chartData.push(data);
      i++;
    }


    var chartOptions = {
      animation:{
        animateScale:true
      }
    };
    console.log(chartData)
    return (
      <div>
        <Doughnut data={chartData} options={chartOptions}/>
      </div>
    );
  }

  render () {
    return (
      this.renderDonut()
    );
  }
}

export default AssetAlloc;
import React from 'react';
import ReactSlider from 'react-rangeslider';
// import AssetAlloc from './AssetAlloc';
import assetPlan from '../../data/data';
import {Doughnut} from 'react-chartjs';
import Chart from 'react-chartjs';

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      riskLevel: 5,
      amount: 0,
      assetAlloc: {}
    }
  }

  componentDidMount() {
    this.setState({
      assetAlloc: assetPlan[this.state.riskLevel - 1]
    });
  }

  handleChange(value) {
    this.setState({
      riskLevel: value,
      assetAlloc: assetPlan[value - 1 ]
    });
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
    console.log(this.state.riskLevel)
    return (
      <div>
        <ReactSlider
          min={1}
          max={10}
          step={1}
          value={this.state.riskLevel}
          className='horizontal-slider'
          onChange={(value)=>this.handleChange(value)} /> 
        <div>Asset Aloocation for Risk Level: {this.state.riskLevel}</div> 
        {this.renderDonut()} 
      </div>
    );
  }
}

export default UserInput;
        // <AssetAlloc riskLevel={this.state.riskLevel} assetAlloc={this.state.assetAlloc}/>  
import React from 'react';
import assetPlan from '../../data/data';
const DoughnutChart = require("react-chartjs").Doughnutt;
const Chart = require("react-chartjs");

class AssetAlloc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      assetAlloc: assetPlan[this.props.riskLevel]
    }
    console.log('Inside AssetAlloc', this.props.riskLevel, this.state.assetAlloc)
  }

  renderDonut(){
    var riskData = {};
    riskData.labels = [];
    riskData.datasets = [];

    var dataset = {};
    dataset.data = [];
    dataset.backgroundColor = ["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB" ];
    dataset.hoverBackgroundColor = ["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB" ];

    for (var key in this.state.assetAlloc) {
      //The current property is not a direct property of assetAlloc
      if (!this.state.assetAlloc.hasOwnProperty(key)) {
        continue;
      }
      riskData.labels.push(key);
      dataset.data.push(this.state.assetAlloc[key])
    }
    riskData.datasets.push(dataset);
    console.log(riskData)

    var chartOptions = {
      animation:{
        animateScale:true
      }
    };
    return (
      <div>
        <DoughnutChart data={riskData} options={chartOptions}/>
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
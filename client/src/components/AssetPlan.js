import React from 'react';
import assetPlan from '../../data/data';
import Label from '../../data/label';
import {PieTooltip, SimpleTooltip} from 'react-d3-tooltip';

class AssetPlan extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.responsiveDonut();
  }

  renderDonut() {
    const width = 700,
     height = 400,
     innerRadius = 50;
    const name = function(d) {
      return d.name;
    };
    const value = function(d) {
      return d.value;
    };
    const valPercent = function(d) {
      return d.value.toString+'%';
    }

    var color = ["#aaeeee", "#7798BF", "#55BF3B", "#DDDF0D", "#DF5353"];
    var chartSeries = [];
    var asset = assetPlan[this.props.riskLevel];
    
    var i = 0;
    for (var key in asset) {
      var str = key.toUpperCase();
      str = str.replace(/_/g, " ");
      var data = {};
      data.field = str;
      data.value = asset[key];
      data.name = str;
      data.color = color[i];
      chartSeries.push(data);
      i++;
    }
    return (
      <div className="center">
        <PieTooltip
          data= {chartSeries}
          width= {width}
          height= {height}
          chartSeries= {chartSeries}
          value = {value}
          name = {name}
          innerRadius = {innerRadius}
          >
          <SimpleTooltip value={valPercent}/>
        </PieTooltip>
      </div>
      );
  }

  responsiveDonut() {
    var el = document.querySelector("svg");
    console.log('el', el, document.querySelector("svg"))
    if (el) {
      el.setAttribute("viewBox", "130 50 410 300");
      el.setAttribute("class", ".svg-content-responsive");
    }
  }

  render () {
    return (
      <div className="donut">
        <div className="subheading">{Label.distributionHeader}<span className="riskLevel">{this.props.riskLevel}</span></div> 
        <div className=".svg-container">
          {this.renderDonut()}
        </div>
      </div>
    )
  }
}

export default AssetPlan;
import React from 'react';
import ReactSlider from 'react-rangeslider';
import assetPlan from '../../data/data';
import Label from '../../data/label';
import {PieTooltip, SimpleTooltip} from 'react-d3-tooltip';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      riskLevel: 5,
      assetAlloc: {}
    }
  }

  componentDidMount() {
    this.setState({
      assetAlloc: assetPlan[this.state.riskLevel]
    });
  }

  handleChange(value) {
    this.setState({
      riskLevel: value,
      assetAlloc: assetPlan[value]
    });
  }

  renderDonut() {
    var width = 700,
     height = 400,
     title = "Asset Distribution";
    var name = function(d) {
      return d.name;
    };
    var value = function(d) {
      return d.value;
    };
    var valPercent = function(d) {
      return d.value.toString+'%';
    }
    var innerRadius = 50;
    var chartSeries = [];
    var color = ["#aaeeee", "#7798BF", "#55BF3B", "#DDDF0D", "#DF5353"];
    
    var i = 0;
    for (var key in this.state.assetAlloc) {
      var str = key.toUpperCase();
      str = str.replace(/_/g, " ");
      var data = {};
      data.field = str;
      data.value = this.state.assetAlloc[key];
      data.name = str;
      data.color = color[i];
      chartSeries.push(data);
      i++;
    }
    console.log(chartSeries)
    return (
      <div className="center donut">
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
    console.log('el', el)
    if (el) {
      el.setAttribute("viewBox", "130 50 410 300");
      el.setAttribute("class", ".svg-content-responsive");
    }
  }

  render () {
    return (
      <div>
        <div className="subheading">{Label.riskInputHeader}</div>
        <div className="center slider">
          <ReactSlider
            min={1}
            max={10}
            step={1}
            value={this.state.riskLevel}
            className='horizontal-slider'
            onChange={(value)=>this.handleChange(value)} /> 
          <div id="lowrisk">{Label.lowRisk}</div>
          <div id="highrisk">{Label.highRisk}</div>
        </div>
        <br/>
        <br/>
        <div className="subheading">{Label.distributionHeader}<span className="riskLevel">{this.state.riskLevel}</span></div> 
        <div className=".svg-container">
          {this.renderDonut()}
          {this.responsiveDonut()}
        </div>
      </div>
    );
  }
}

export default UserInput;
import React from 'react';
import ReactSlider from 'react-rangeslider';
import assetPlan from '../../data/data';
import {PieTooltip, SimpleTooltip} from 'react-d3-tooltip';
import {PieChart} from 'react-d3-basic';
// import AssetAlloc from './AssetAlloc';
// import {Doughnut} from 'react-chartjs';
// import Chart from 'react-chartjs';

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
          // title= {"Asset Distribution"}
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

        <div className="subheading">{'Choose a Risk Level for your Portfolio'}</div>
        <div className="center slider">
          <ReactSlider
            min={1}
            max={10}
            step={1}
            value={this.state.riskLevel}
            className='horizontal-slider'
            onChange={(value)=>this.handleChange(value)} /> 
          <span id="lowrisk">{'Low Risk'}</span>
          <span id="highrisk">{'High Risk'}</span>
        </div>
        <br/>
        <br/>
        <div className="subheading">Asset Distribution for Risk Level <span className="riskLevel">{this.state.riskLevel}</span></div> 
        <div className=".svg-container">
          {this.renderDonut()}
          {this.responsiveDonut()}
        </div>
      </div>
    );
  }
}

export default UserInput;
  
          // {this.renderChartJSDonut()}
  // renderChartJSDonut(){
  //   var chartData = [];
  //   var color = [
  //     {
  //       color: '#F7464A',
  //       highlight: '#FF5A5E'
  //     },
  //     {
  //       color: '#949FB1',
  //       highlight: '#A8B3C5'
  //     },
  //     {
  //       color: '#FDB45C', 
  //       highlight: '#FFC870'
  //     },
  //     {
  //       color: '#46BFBD',
  //       highlight: '#5AD3D1'
  //     },
  //     {
  //       color: '#4D5360',
  //       highlight: '#616774'
  //     }
  //   ];

  //   var i = 0;
  //   for (var key in this.state.assetAlloc) {
  //     var data = {};
  //     data.value = this.state.assetAlloc[key];
  //     data.label = key;
  //     data.color = color[i].color;
  //     data.strokeColor = color[i].color;
  //     data.pointColor = color[i].color;
  //     data.highlight = color[i].highlight;
  //     data.showInLegend = true;
  //     chartData.push(data);
  //     i++;
  //   }

  //   var chartOptions = {
  //     tooltipTemplate: "<%= value %>%",
  //     // legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
  //     // responsive: true,
  //   };
  //   console.log(chartData)
  //   var datasets = chartData.map(function (ds) { 
  //     return <li key={ds.label}><span className="legend-color-box" style={{ backgroundColor: ds.strokeColor }}></span> { ds.label }</li>;
  //   });

  //   return (
  //     <div id="something">
  //       <Doughnut data={chartData} options={chartOptions} width="300" height="300"/>
  //       <ul className="legend">
  //         { datasets }
  //       </ul>
  //     </div>
  //   );
  // }

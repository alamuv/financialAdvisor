import React from 'react';
import assetPlan from '../../data/data';
import Label from '../../data/label';
import c3 from 'c3';

class AssetPlan extends React.Component {
  constructor(props) {
    super(props);
  }

  // invoke responsiveDonut after the component renders and an svg element exists
  componentDidMount() {
    this.renderDonut();

  // renderDonut follows react-d3-tooltip libraries pie chart to render a Donut
  renderDonut() {
    let columns = [];
    let data = assetPlan[this.props.riskLevel];

    for (let key in data) {
      var str = key.replace(/_/g, " ");
      let el = [];
      el[0] = str;

      if (this.props.dollarValue > 100) {
        el[1] = data[key]/100 * this.props.dollarValue;
        console.log('dollarValue', el);
      } else {
        el[1] = data[key];
        console.log('no dollarValue', el);
      }
      columns.push(el);
    }
    
    let chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: columns,
        type: 'donut'
      },
      donut: {
        label: {
            format: function (value, ratio, id) {
                return d3.format('$')(value);
            }
        }
      },
      color: {
        pattern: ["#aaeeee", "#7798BF", "#55BF3B", "#DDDF0D", "#DF5353"]
      },
      tooltip: {
        format: {
          name: function (name, ratio, id, index) { return name; }
        }
      }

    });
  }

  // responsiveDonut sets viewBox attribute on the svg element to render a responsivesvg
  responsiveDonut() {
    var el = document.querySelector("svg");
    if (el) {
      el.setAttribute("viewBox", "100 10 410 300");
      el.setAttribute("preserveAspectRatio", "xMinYMin meet");
      el.setAttribute("class", ".svg-content-responsive");
    }
  }

  render () {
    console.log('asset plan dollarValue',this.props.dollarValue);
    return (
      <div className="donut">
        <div className="subheading">{Label.distributionHeader}<span className="riskLevel">{this.props.riskLevel}</span></div> 
        <div className=".svg-container">
          <div id="chart">hi</div>
          {this.renderDonut()}
        </div>
      </div>
    )
  }
}

export default AssetPlan;
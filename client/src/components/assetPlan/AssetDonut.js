import React from 'react';
import assetPlan from '../../../data/data';
import c3 from 'c3';

class AssetDonut extends React.Component {
  constructor(props) {
    super(props);
  }

  // invoke responsiveDonut after the component renders and an svg element exists
  componentDidMount() {
    this.renderDonut();
    // this.responsiveDonut();
  }

  // renderDonut uses c3 library pie chart to render a Donut
  renderDonut() {
    let columns = [];
    let data = assetPlan[this.props.riskLevel];

    for (let key in data) {
      var str = key.replace(/_/g, ' ');
      let el = [];
      el[0] = str;

      if (this.props.dollarValue > 0) {
        el[1] = Math.round(data[key] / 100 * this.props.dollarValue);
      } else {
        el[1] = data[key];
      }
      columns.push(el);
    }

    let chart = c3.generate({
      bindto: '.chart',
      data: {
        columns: columns,
        type: 'donut',
        order: null
      },
      donut: {
        label: {
          format: function (value, ratio, id) {
            return d3.format('$')(value);
          }
        }
      },
      color: {
        pattern: ['#aaeeee', '#7798BF', '#55BF3B', '#DDDF0D', '#DF5353']
      }
    });
  }

  render() {
    return (
      <div className="chart">
        {this.renderDonut()}
      </div>
    );
  }
}

export default AssetDonut;
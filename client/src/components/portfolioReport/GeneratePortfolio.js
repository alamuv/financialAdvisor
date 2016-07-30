import React from 'react';
import Label from '../../../data/label';
import assetPlan from '../../../data/data';
import AssetDonut from '../assetPlan/AssetDonut';
import AssetTable from '../assetPlan/AssetTable';
import { Link } from 'react-router'
import c3 from 'c3';


class GeneratePortfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderDonut();
  }

  // renderDonut uses c3 library pie chart to render a Donut
  renderDonut() {
    const {riskLevel, dollarValue} = this.props.params;
    let columns = [];
    let data = assetPlan[riskLevel];

    for (let key in data) {
      var str = key.replace(/_/g, " ");
      let el = [];
      el[0] = str;

      if (dollarValue > 100) {
        el[1] = Math.round(data[key]/100 * dollarValue);
      } else {
        el[1] = data[key];
      }
      columns.push(el);
    }

    let chart = c3.generate({
      bindto: '#printchart',
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
        pattern: ["#aaeeee", "#7798BF", "#55BF3B", "#DDDF0D", "#DF5353"]
      }
    });
  }


  render () {
    const {riskLevel, dollarValue} = this.props.params;
    console.log(riskLevel, dollarValue);
    return (
      <div>
        <div className="subheading">
          {Label.distributionHeader}
          <span className="riskLevel">{riskLevel} </span>
          <div className="subheading">Investment Amount - ${dollarValue}</div>
        </div>
        <span>
          <AssetTable riskLevel={riskLevel} dollarValue={dollarValue} />
        </span>
        <span>
          <AssetDonut riskLevel={riskLevel} dollarValue={dollarValue} />
        </span>
        <div>
          <span>
          <div className="subheading">
            Less Conservative Portfolio  RiskLevel - {riskLevel-1} </div>
            <AssetTable riskLevel={riskLevel-1} dollarValue={dollarValue} />
          </span>
          <span>
          <div className="subheading">
            More Conservative Portfolio  RiskLevel - {parseInt(riskLevel)+1} </div>
            <AssetTable riskLevel={parseInt(riskLevel)+1} dollarValue={dollarValue} />
          </span>
        </div>
      </div>
    );
  }
}

export default GeneratePortfolio;

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
        <div className="groupSpan">
          <span>
            <AssetTable riskLevel={riskLevel} dollarValue={dollarValue} />
          </span>
          <div className="center donut">
            <AssetDonut riskLevel={riskLevel} dollarValue={dollarValue} />
          </div>
        </div>
        <div className="subheading">
          Asset Allocation for More/Less Conservative Risk Values
        </div>
        <div className="groupSpan">
          <span className="leftHalf">
          <div className="tableHeading">
            RiskLevel - {riskLevel-1} </div>
            <AssetTable riskLevel={riskLevel-1} dollarValue={dollarValue} />
          </span>
          <span className="rightHalf">
          <div className="tableHeading">
            RiskLevel - {parseInt(riskLevel)+1} </div>
            <AssetTable riskLevel={parseInt(riskLevel)+1} dollarValue={dollarValue} />
          </span>
        </div>
      </div>
    );
  }
}

export default GeneratePortfolio;

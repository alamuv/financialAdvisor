import React from 'react';
import Label from '../../../data/label';
import AssetDonut from './AssetDonut';
import AssetTable from './AssetTable';
import PortfolioReport from '../portfolioReport/PortfolioReport'
import {Link} from 'react-router';

const AssetPlan = ({riskLevel, dollarValue}) => {
  return (
    <div>
      <div className="subheading">
        {Label.distributionHeader}
        <span>{riskLevel} - </span>
        <span>${dollarValue}</span>
      </div> 
      <div className="center donut">
        <PortfolioReport riskLevel={riskLevel} dollarValue={dollarValue} />
        <AssetDonut riskLevel={riskLevel} dollarValue={dollarValue} />
      <br />
      </div>
        <AssetTable riskLevel={riskLevel} dollarValue={dollarValue} />
    </div>
  );
}

export default AssetPlan;
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
        <span className="riskLevel">{riskLevel} - </span>
        <span className="riskLevel">${dollarValue}</span>
      </div> 
      <div className="center donut">
        <PortfolioReport riskLevel={riskLevel} dollarValue={dollarValue} />
        <div id="print">
          <Link to={`/print/${riskLevel}/${dollarValue}`}>
            Print
          </Link>
        </div>
        <AssetDonut riskLevel={riskLevel} dollarValue={dollarValue} />
      <br />
        <AssetTable riskLevel={riskLevel} dollarValue={dollarValue} />
      </div>
    </div>
  );
}

export default AssetPlan;
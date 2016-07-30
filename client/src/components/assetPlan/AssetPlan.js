import React from 'react';
import Label from '../../../data/label';
import AssetDonut from './AssetDonut';
import AssetTable from './AssetTable';
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
        <div id="print">
          <Link to={`/print/${riskLevel}/${dollarValue}`}>
            Print
          </Link>
        </div>
        <AssetDonut riskLevel={riskLevel} dollarValue={dollarValue} />
      </div>

      <br />
      <div className="table">
        <AssetTable riskLevel={riskLevel} dollarValue={dollarValue} />
      </div>
    </div>
  );
}

export default AssetPlan;
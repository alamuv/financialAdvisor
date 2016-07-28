import React from 'react';
import Label from '../../../data/label';
import AssetDonut from './AssetDonut';
import AssetTable from './AssetTable';
import PortfolioReport from './PortfolioReport';

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
        <AssetDonut riskLevel={riskLevel} dollarValue={dollarValue} />
      </div>

      <br />
      <AssetTable riskLevel={riskLevel} dollarValue={dollarValue} />
    </div>
  );
}

export default AssetPlan;

  // // responsiveDonut sets viewBox attribute on the svg element to render a responsivesvg
  // responsiveDonut() {
  //   var el = document.querySelector("svg");
  //   if (el) {
  //     el.setAttribute("viewBox", "100 10 410 300");
  //     el.setAttribute("preserveAspectRatio", "xMinYMin meet");
  //     el.setAttribute("class", ".svg-content-responsive");
  //   }
  // }
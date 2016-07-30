import React from 'react';
import Label from '../../../data/label';
import assetPlan from '../../../data/data';
import AssetDonut from '../assetPlan/AssetDonut';
import AssetTable from '../assetPlan/AssetTable';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import c3 from 'c3';


class GeneratePortfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  printPortfolio () {
    var $print = document.getElementById("printThis");
    var domClone = $print.cloneNode(true);
    
    var $printSection = document.getElementById("printSection");
    
    if (!$printSection) {
      var $printSection = document.createElement("div");
      $printSection.id = "printSection";
      document.body.appendChild($printSection);
    }
    
    $printSection.innerHTML = "";
    
    $printSection.appendChild(domClone);
    window.print();
  }

  render () {
    const {riskLevel, dollarValue} = this.props.params;
    console.log(riskLevel, dollarValue);
    return (
      <div>
        <div className="printButton">
          <Button bsSize="small" bsStyle="info" onClick={() => this.printPortfolio()}>Print</Button>
          {' '}
          <Link to="/">
            Cancel
          </Link>
        </div>
        <div id="printThis">
          <div className="center subheading">
            {Label.distributionHeader}
            <span className="riskLevel">{riskLevel} </span>
            <div className="subheading">Investment Amount - ${dollarValue}</div>
          </div>
          <div>
            <div className="center">
              <AssetTable riskLevel={riskLevel} dollarValue={dollarValue} />
            </div>
            <div className="center donut">
              <AssetDonut riskLevel={riskLevel} dollarValue={dollarValue} />
            </div>
          </div>
          <div className="subheading">
            Asset Allocation for More/Less Conservative Risk Values
          </div>
          <div>
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
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default GeneratePortfolio;

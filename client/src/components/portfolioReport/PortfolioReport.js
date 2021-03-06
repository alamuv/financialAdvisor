import React from 'react';
import Label from '../../../data/label';
import assetPlan from '../../../data/data';
import AssetDonut from '../assetPlan/AssetDonut';
import AssetTable from '../assetPlan/AssetTable';
import { Button, Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import c3 from 'c3';

//PortfolioReport renders a print icon
//onClick event on the icon generates a print report on a Modal
class PortfolioReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      printing: false
    };
  }

  setPrintingState () {
    this.setState({printing: true});
  }
  
  resetPrinitngState () {    
    this.setState({printing: false});
  }

  // selects part of the DOM to Print
  printPortfolio () {
    var $print = document.getElementById('printThis');
    var domClone = $print.cloneNode(true);
    
    var $printSection = document.getElementById('printSection');
    
    if (!$printSection) {
      var $printSection = document.createElement('div');
      $printSection.id = 'printSection';
      document.body.appendChild($printSection);
    }
    
    $printSection.innerHTML = '';
    
    $printSection.appendChild(domClone);
    window.print();
  }

  componentDidMount() {
    this.renderDonut();
  }

  // renderDonut uses c3 library pie chart to render a Donut
  renderDonut() {
    let columns = [];
    let data = assetPlan[this.props.riskLevel];

    for (let key in data) {
      var str = key.replace(/_/g, ' ');
      let el = [];
      el[0] = str;

      if (this.props.dollarValue > 100) {
        el[1] = Math.round(data[key] / 100 * this.props.dollarValue);
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
        pattern: ['#aaeeee', '#7798BF', '#55BF3B', '#DDDF0D', '#DF5353']
      }
    });
  }

  generateReport() {
    return (
      <div>
        <div className="subheading">
          {Label.portfolioReportHeading}
        </div> <br />
        <div className="riskLevel">{Label.distributionHeader + this.props.riskLevel} </div>
        <div className="riskLevel">{Label.investmentAmount + this.props.dollarValue}</div>
        <div id="printchart">
        </div><br />
          <AssetTable riskLevel={this.props.riskLevel} dollarValue={this.props.dollarValue} />
        <br /> 
        <div>
          <div>
          <div className="riskLevel">
            {Label.conservativePortfolio} {this.props.riskLevel - 1} </div> <br />
            <AssetTable riskLevel={this.props.riskLevel - 1} dollarValue={this.props.dollarValue} />
          </div>
          <br /><br />
          <div>
          <div className="riskLevel">
            {Label.riskierPortfolio} {parseInt(this.props.riskLevel) + 1} </div> <br />
            <AssetTable riskLevel={parseInt(this.props.riskLevel) + 1} dollarValue={this.props.dollarValue} />
          </div>
        </div>
      </div>
    );
  }

  render () {
    let tooltip = <Tooltip id={tooltip}>{'Print'}</Tooltip>;
    return (
      <div>
        <OverlayTrigger
          overlay={tooltip} placement="bottom"
          delayShow={150} delayHide={50}>
          <button className="printLink"
            onClick={() => this.setPrintingState()}>
          </button>
        </OverlayTrigger>

        <Modal
          show={this.state.printing}
          onHide={() => this.resetPrinitngState()}
          onEntered={() => this.renderDonut()}
          >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{Label.portfolioReport}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            id="printThis">
            {this.generateReport()}
          </Modal.Body>
          <Modal.Footer>
            <Button bsSize="small" onClick={() => this.resetPrinitngState()}>{Label.cancel}</Button>
            <Button bsSize="small" bsStyle="info" onClick={() => this.printPortfolio()}>{Label.print}</Button>
          </Modal.Footer>
        </Modal>
      </div>     
    );
  }
}

export default PortfolioReport;
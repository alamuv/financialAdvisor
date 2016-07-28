import React from 'react';
import Label from '../../../data/label';
import {Button, Modal} from 'react-bootstrap';

class PortfolioReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      printing: false
    }
  }

  setPrintingState () {
    this.setState({printing: true});
  }
  resetPrinitngState () {    
    this.setState({printing: false});
  }

  printPortfolio () {

  }

  render () {
    return (
      <div>
        <Button 
          bsStyle="info"
          onClick={() => {this.setPrintingState()}} 
          block>
          {Label.portfolioReport}
        </Button>
        <Modal
          show={this.state.printing}
          onHide={() => this.resetPrinitngState()}
          >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{Label.portfolioReport}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            id="printThis">
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.resetPrinitngState()}>Cancel</Button>
            <Button onClick={() => this.printPortfolio()}>Print Portfolio</Button>
          </Modal.Footer>
        </Modal>

      </div>     
    );
  }
}

export default PortfolioReport;
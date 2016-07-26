import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import DollarInput from './DollarInput';
import RiskInput from './RiskInput';
import AssetPlan from './AssetPlan';
import Label from '../../data/label';
var _debounce = require('lodash/debounce');

//App holds the risk level as its state
//When the risk level changes,App re-renders
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dollarValue: '',
      riskLevel: Label.initialRiskLevel
    }
  }

  setDollarVal(dollarValue) {
    if (dollarValue > 500 && dollarValue !== '') {
      this.setState({dollarValue});
    }
  }

  render () {
    const debounceDollarValChange = _debounce((dollarValue) => this.setDollarVal(dollarValue), 300);
    return (
      <div>
        <Header />
        <RiskInput riskLevel={this.state.riskLevel} onRiskChange={riskLevel => this.setState({riskLevel})}/>
        <DollarInput dollarVal={this.state.dollarValue} onDollarValChange={debounceDollarValChange}/>
        <AssetPlan riskLevel={this.state.riskLevel} dollarValue={this.state.dollarValue}/>
      </div>
    );
  }
}

export default App;
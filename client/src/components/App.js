import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import DollarInput from './input/DollarInput';
import RiskInput from './input/RiskInput';
import AssetPlan from './assetPlan/AssetPlan';
import Label from '../../data/label';
var _debounce = require('lodash/debounce');

//App holds the risk level as its state
//When the risk level changes,App re-renders
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dollarValue: Label.initialDollarValue,
      riskLevel: Label.initialRiskLevel
    }
  }

  setDollarVal(dollarValue) {
    if (dollarValue > 100 && dollarValue !== '') {
      this.setState({dollarValue});
    }
  }

  render () {
    const debounceDollarValChange = _debounce((dollarValue) => this.setDollarVal(dollarValue), 500);
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
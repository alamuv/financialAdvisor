import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import DollarInput from './DollarInput';
import RiskInput from './RiskInput';
import AssetPlan from './AssetPlan';
import Label from '../../data/label';

//App holds the risk level as its state
//When the risk level changes,App re-renders
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dollarValue: Label.dollarValue,
      riskLevel: Label.initialRiskLevel
    }
  }

  render () {
    console.log(this.state.dollarValue);
    return (
      <div>
        <Header />
        <RiskInput riskLevel={this.state.riskLevel} onRiskChange={riskLevel => this.setState({riskLevel})}/>
        <DollarInput onDollarValChange={dollarValue => this.setState({dollarValue})}/>
        <AssetPlan riskLevel={this.state.riskLevel} />
      </div>
    );
  }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import RiskInput from './RiskInput';
import AssetPlan from './AssetPlan';
import Label from '../../data/label';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      riskLevel: Label.initialRiskLevel
    }
  }

  render () {
    return (
      <div>
        <Header />
        <RiskInput riskLevel={this.state.riskLevel} onRiskChange={riskLevel => this.setState({riskLevel})}/>
        <AssetPlan riskLevel={this.state.riskLevel} />
      </div>
    );
  }
}

export default App;
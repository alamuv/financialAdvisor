import React from 'react';
import ReactSlider from 'react-rangeslider';
import Label from '../../data/label';

const RiskInput = ({riskLevel, onRiskChange}) => {
  return (
    <div>
      <div className="subheading">{Label.riskInputHeader}</div>
      <div className="center slider">
        <ReactSlider
          min={1}
          max={10}
          step={1}
          value={riskLevel}
          className='horizontal-slider'
          onChange={(value) => onRiskChange(value)} /> 
        <div id="lowrisk">{Label.lowRisk}</div>
        <div id="highrisk">{Label.highRisk}</div>
      </div>
    </div>
  );
};

export default RiskInput;
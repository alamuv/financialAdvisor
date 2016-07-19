import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import RiskInput from '../../src/components/RiskInput';

var riskLevel = 8;

describe('<RiskInput/>', () => {
  it('should have props for risk level', () => {
    const wrapper = shallow(<RiskInput/>);
    expect(wrapper.props().riskLevel).to.be.defined;
  });

  it('should have props for risk change event', () => {
    const wrapper = shallow(<RiskInput/>);
    expect(wrapper.props().onRiskChange).to.be.defined;
  });

  it('should have .rangeslider-horizontal', () => {
    const wrapper = shallow(<RiskInput/>);
    expect(wrapper.find('.rangeslider-horizontal')).to.exist;
  });

  it('should have .rangeslider__handle', () => {
    const wrapper = shallow(<RiskInput/>);
    expect(wrapper.find('.rangeslider__handle')).to.exist;
  });
});
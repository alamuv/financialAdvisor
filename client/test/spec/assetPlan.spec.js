import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Data from '../../data/data';
import AssetPlan from '../../src/components/AssetPlan';

var riskLevel = 8;

describe('<AssetPlan/>', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<AssetPlan />);
    expect(AssetPlan.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  // it('should have a svg to display the donut chart', () => {
  //   const wrapper = mount(<AssetPlan/>);
  //   expect(wrapper.find('svg')).to.have.length(1);
  // });

  it('should have props for risk level', () => {
    const wrapper = shallow(<AssetPlan/>);
    expect(wrapper.props().riskLevel).to.be.defined;
  });

});
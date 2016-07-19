import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import assetPlan from '../../data/data';

var riskLevel = 8;

describe('assetPlan', () => {
  it('should have assets sum to 100 and 5 categories', () => {
    var data = assetPlan[riskLevel];
    var sum = 0;
    var length = 0;
    for (var key in data) {
      sum += data[key];
      length++;
    }
    expect(sum).to.equal(100);
    expect(length).to.equal(5);
  });
});
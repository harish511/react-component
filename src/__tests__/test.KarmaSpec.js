'use strict';

import { expect } from 'chai';
import Component from '../index';

describe('Performance', function() {
  describe('Test()', function() {
    it('#Component should have properties', function() {
      const component = Component();
      expect(component).to.be.an('object');
    });
  });
});

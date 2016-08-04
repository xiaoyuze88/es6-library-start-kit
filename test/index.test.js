import Promise from '../dist/test-promise';
import {expect} from 'chai';

describe('hello world', () => {
  it('mocha runs well', () => {
    expect(Promise).to.not.empty;
  });
});

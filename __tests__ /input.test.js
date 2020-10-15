'use strict'

const Input = require('../lib/input.js');

describe('Testing the input module', () => {
  it('should return a new valid instance with acti', () => {
    
    let testArgs = { add: "walk Nico"};

    let parsedInput = new Input(testArgs);

    expect(parsedInput).toEqual({ action: 'add', payload: 'walk Nico' });
    expect(parsedInput.isValid()).toEqual(true);
  });
  
  it('should return a false boolean when given bad inputs', () => {

    let testArgs = { wrong: 'bad action' };

    let parsedInput = new Input(testArgs);

    expect(parsedInput.isValid()).toEqual(false);

  });

});
const { exportAllDeclaration } = require('@babel/types');
const { TestResult } = require('@jest/types');
const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});
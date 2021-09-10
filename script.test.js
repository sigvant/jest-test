// const { test, expect } = require('@jest/globals');
// const sum = require('./script.js');

// const { test, expect } = require("@jest/globals");
// const data = require('./objectdata');

const { test, expect } = require("@jest/globals");
const exp = require("constants");
const {a, b} = require('./addingpositives');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test('object assignment', () => {
//     expect(data).toEqual({one: 1, two: 2});
// });

test('adding positive numbers is not zero', () => {
    expect(a + b).not.toBe();
})

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBE and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // now this works
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towerls',
    'milk'
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow().
    expect(() => compileAndroidCode()).toThrow(Error);

    // you can also use the exact error messa or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
})

// Note: the function that throws an exception needs to be invoked within a 
// wrapping function otherwise the toThrow assertion will fail.
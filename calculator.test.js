const { substract, sum } = require('./calculator');


describe('SUM OPERATION TESTS', () => {


    test('Test (1 + 2) === 3', () => {
        expect(sum(1, 2)).toBe(3);
    });


    test('Test (4 + 5) === 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
});


describe('SUBSTRACT OPERATION TESTS', () => {

    test('Test (4 - 1) === 3', () => {
        expect(substract(4, 1)).toBe(3);
    });

    test('Test (5 - 1) === 4', () => {
        expect(substract(5, 1)).toBe(4);
    });

    test('Test (4 - 4) === 0', () => {
        expect(substract(4, 4)).toBe(0);
    });

});



const { substract, sum } = require('../bin/calculator');
const { calculateCodeBreaker } = require('../bin/codebreaker');


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


const secretNumber = 1234;
// "X" numero y posicion coinciden.
// "-" el numero existe pero no en la posicion.
describe('CODE BREAKER TESTS', () => {



    test('0 MATCH []', () => {
        const result = calculateCodeBreaker(secretNumber, 5678);
        const expected = '';
        expect(result).toBe(expected);
    });

    test('1 MATCH [-]', () => {
        const result = calculateCodeBreaker(secretNumber, 4987);
        const expected = '-';
        expect(result).toBe(expected);
    });

    test('1 MATCH [X]', () => {
        const result = calculateCodeBreaker(secretNumber, 1999);
        const expected = 'X';
        expect(result).toBe(expected);
    });

    test('2 MATCH [XX]', () => {
        const result = calculateCodeBreaker(secretNumber, 1004);
        const expected = 'XX';
        expect(result).toBe(expected);
    });

    test('2 MATCH [--]', () => {
        const result = calculateCodeBreaker(secretNumber, 4001);
        const expected = '--';
        expect(result).toBe(expected);
    });

    test('3 MATCH [XXX]', () => {
        const result = calculateCodeBreaker(secretNumber, 1204);
        const expected = 'XXX';
        expect(result).toBe(expected);
    });

    test('3 MATCH [XXX]', () => {
        const result = calculateCodeBreaker(secretNumber, 1034);
        const expected = 'XXX';
        expect(result).toBe(expected);
    });

    test('3 MATCH [---]', () => {
        const result = calculateCodeBreaker(secretNumber, 4021);
        const expected = '---';
        expect(result).toBe(expected);
    });

    test('3 MATCH [---]', () => {
        const result = calculateCodeBreaker(secretNumber, 4301);
        const expected = '---';
        expect(result).toBe(expected);
    });

    test('4 MATCH [XXXX]', () => {
        const result = calculateCodeBreaker(secretNumber, 1234);
        const expected = 'XXXX';
        expect(result).toBe(expected);
    });

    test('4 MATCH [----]', () => {
        const result = calculateCodeBreaker(secretNumber, 4321);
        const expected = '----';
        expect(result).toBe(expected);
    });

    test('1. 2 MATCH [X-]', () => {
        const result = calculateCodeBreaker(secretNumber, 1400);
        const expected = 'X-';
        expect(result).toBe(expected);
    });
    test('1. 2 MATCH [X-]', () => {
        const result = calculateCodeBreaker(secretNumber, 1040);
        const expected = 'X-';
        expect(result).toBe(expected);
    });

    test('1. 3 MATCH [X-X]', () => {
        const result = calculateCodeBreaker(secretNumber, 1304);
        const expected = 'X-X';
        expect(result).toBe(expected);
    });

    test('1. 3 MATCH [---X]', () => {
        const result = calculateCodeBreaker(secretNumber, 4444);
        const expected = '---X';
        expect(result).toBe(expected);
    });


});


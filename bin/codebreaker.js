
function calculateCodeBreaker(numberToGuess, givenNumber) {

    let result = '';

    const givenNumberAsString = givenNumber.toString().split('');
    const numberToGuessAsString = numberToGuess.toString().split('');

    numberToGuessAsString.forEach((item, i) => {

        if (numberToGuessAsString[i] == givenNumberAsString[i]) {
            result = result + 'X';
        } else if (numberToGuessAsString.includes(givenNumberAsString[i])) {
            result = result + '-';
        }
    });

    return result;


}

module.exports = {
    calculateCodeBreaker
}
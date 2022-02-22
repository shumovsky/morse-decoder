const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const codedLettersArr = [];
    let morseSymbol = '';
    let morseCode = [];
    let output = '';
    let codedLetterPart = '';

    for (let i = 0; i <= expr.length - 1; i += 10) {
        codedLettersArr.push(expr.slice(i, i + 10));
    }

    for (let codedLetter of codedLettersArr) {
        if (!codedLetter.startsWith('*')) {
            for (let i = 0; i <= codedLetter.length - 1; i += 2) {
                codedLetterPart = codedLetter.slice(i, i + 2);
                if (codedLetterPart !== '00') {
                    morseSymbol = codedLetterPart === '10' ? '.' : '-';
                    morseCode.push(morseSymbol);
                }
            }
            output += MORSE_TABLE[morseCode.join('')];
            morseCode.length = 0;
        } else output += ' ';
    }
    return output;

}

module.exports = {
    decode
}
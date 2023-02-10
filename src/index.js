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
    let arrExpr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arrExpr.push(expr.slice(i, i + 10))
    };

    let morse = arrExpr.map(el => {
        let str = '';
        if (el == '**********') {
            return el = ' ';
        } else {
            for (let i = el.length - 1; i >= 0; i -= 2) {
                if (el[i] + el[i - 1] == '01') {
                    str += '.';
                } else if (el[i] + el[i - 1] == '11') {
                    str += '-';
                }
            }
            return el = str;
        }

    });

    let result = morse.map(el => {
        el = el.split('').reverse().join('');
        return MORSE_TABLE[el] ? el = MORSE_TABLE[el] : el;
    })

    return result.join('');
}


module.exports = {
    decode
}
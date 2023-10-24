
//-------------------------------------------Aarrow Function
const storeNumber = (paraMeter) => {
    let numberI = [];
    if (paraMeter % 1 !== 0 || typeof paraMeter !== "number") {
        return false;
    }
    for (let i = 1; i <= paraMeter; i++) {
        numberI.push(i);
    }
    return numberI;
}

const getStoreNumber = storeNumber(1000);

const getPalindromes = ((paraMeter) => {
    if (paraMeter === false) {
        return `Type only whole number`;
    }
    let palindromeValues = [];
    let paraMeterStr = paraMeter.join().split(",");
    for (let value of paraMeterStr) {
        if (value[0] === value[value.length - 1]) {
            palindromeValues.push(parseInt(value));
        }
    }
    return palindromeValues;
})(getStoreNumber);

console.log(getPalindromes);


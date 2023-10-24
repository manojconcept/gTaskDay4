
// ----------------------Arrow function
const getOddnumA = (paraArra) => {
    let oddResult = [];
    for (let arraVal of paraArra) {
        let arraVals = arraVal % 2;
        if (arraVals !== 0) {
            oddResult.push(arraVal);
        }
    }
    return oddResult;
}

getOddnumA([1, 2, 3, 4, 5]);
